const { Item, ItemCategory, ItemMedicineInfo, ItemConversionUnit, ItemStockInfo, Sequelize } = require("../../models/index");
const Op = Sequelize.Op;

class ItemController {
    static async browse(req, res, next) {
        try {
            const { page = 1, limit = 10, search , searchBy = "itemName", isPublic = "true" } = req.query
            let query = {}

            if(search&&searchBy) {
                const whitelist = [ "itemName", "itemCode" ];
                if(whitelist.includes(searchBy)){
                    query[searchBy] = { [Op.iLike]: `%${search}%` }
                }else{
                    res.status(400).json({ message: "search by value mismatch, expected itemName and itemCode" });
                }
            }

            if(isPublic == "true") {
                query['$ItemMedicineInfo.medicineCatalog$'] = 'public'
            }

            const result = await Item.findAll({
                where: query,
                offset: (page - 1) * limit, limit: limit,
                order: [
                    ['createdAt', 'DESC']
                ],
                include: [
                    { model: ItemCategory, attributes: ['id','title'] },
                    { model: ItemMedicineInfo, attributes: ['medicineCatalog'] },
                    { model: ItemStockInfo, attributes: ['qty', 'expiredDate'],
                        required: false,
                        where: {
                            expiredDate: {
                                [Op.or]: [
                                    { [Op.gte]: new Date() }, { [Op.eq]: null }
                                ]
                            }
                        }
                    },
                    { model: ItemConversionUnit }
                ],
                attributes: { exclude: ['ItemCategoryId', 'updatedAt'] },
                subQuery: false
            })
            if(result.length) {
                const resultJson = result.map(el => {
                    let temp = el.toJSON();
                    if(temp.ItemStockInfos.length) {
                        temp.totalQty = temp.ItemStockInfos.reduce( function(a, b){
                            return a + b.qty;
                        }, 0);
                    }else{
                        temp.totalQty = 0
                    }
                    delete temp.ItemMedicineInfo
                    delete temp.ItemStockInfos
                    return temp
                })
                
                let countData = await Item.findAndCountAll({
                    where: query,
                    include: [
                        { model: ItemMedicineInfo }
                    ],
                })
                let hasPrevPage;
                let hasNextPage;
                let totalPages = Math.ceil(countData.count / limit)
    
                if (result.length === 0) {
                    hasNextPage = null
                    hasPrevPage = null
                } else {
                    if (Number(page) === 1 && totalPages === 1) {
                        hasNextPage = false
                        hasPrevPage = false
                    } else if (Number(page) === 1 && totalPages >= 1) {
                        hasNextPage = true
                        hasPrevPage = false
                    } else if (Number(page) === totalPages) {
                        hasNextPage = false
                        hasPrevPage = true
                    } else {
                        hasNextPage = true
                        hasPrevPage = true
                    }
                }
                res.status(200).json({
                    message: "success",
                    data: resultJson,
                    totalDocs: countData.count,
                    totalPages,
                    page: Number(page),
                    limit: Number(limit),
                    hasPrevPage,
                    hasNextPage,
                })
            }else{
                res.status(404).json({ message: "data not found" })
            }
        } catch(err) {
            next(err)
        }        
    }

    static async browseByCat(req, res, next) {
        try {
            const { page = 1, limit = 10, categoryId, isPublic = true } = req.query
            let query = {}
            if(categoryId) {
                query.ItemCategoryId = categoryId
            }

            if(isPublic == "true") {
                query['$ItemMedicineInfo.medicineCatalog$'] = { [Op.eq]: 'public' }
            }
            
            const result = await Item.findAll({
                where: query,
                offset: (page - 1) * limit, limit: limit,
                order: [
                    ['createdAt', 'DESC']
                ],
                include: [
                    { model: ItemCategory, attributes: ['id','title'] },
                    { model: ItemMedicineInfo, attributes: ['medicineCatalog'] },
                    { model: ItemStockInfo, attributes: ['qty', 'expiredDate'],
                        required: false,
                        where: {
                            expiredDate: {
                                [Op.or]: [
                                    { [Op.gte]: new Date() }, { [Op.eq]: null }
                                ]
                            }
                        }
                    },
                    { model: ItemConversionUnit }
                ],
                attributes: { exclude: ['ItemCategoryId', 'updatedAt'] },
                subQuery: false,
            })
            
            if(result.length) {
                const resultJson = result.map(el => {
                    let temp = el.toJSON();
                    if(temp.ItemStockInfos.length) {
                        temp.totalQty = temp.ItemStockInfos.reduce( function(a, b){
                            return a + b.qty;
                        }, 0);
                    }else{
                        temp.totalQty = 0
                    }
                    delete temp.ItemMedicineInfo
                    delete temp.ItemStockInfos
                    return temp
                })

                const countData = await Item.findAndCountAll({
                    where: query,
                    include: [
                        { model: ItemMedicineInfo }
                    ],
                })
                
                let hasPrevPage;
                let hasNextPage;
                let totalPages = Math.ceil(countData.count / limit)
    
                if (result.length === 0) {
                    hasNextPage = null
                    hasPrevPage = null
                } else {
                    if (Number(page) === 1 && totalPages === 1) {
                        hasNextPage = false
                        hasPrevPage = false
                    } else if (Number(page) === 1 && totalPages >= 1) {
                        hasNextPage = true
                        hasPrevPage = false
                    } else if (Number(page) === totalPages) {
                        hasNextPage = false
                        hasPrevPage = true
                    } else {
                        hasNextPage = true
                        hasPrevPage = true
                    }
                }
                res.status(200).json({                    
                    message: "success",
                    data: resultJson,
                    totalDocs: countData.count,
                    totalPages,
                    page: Number(page),
                    limit: Number(limit),
                    hasPrevPage,
                    hasNextPage,
                })
            }else{
                res.status(404).json({ message: "data not found" })
            }
        } catch(err) {
            next(err)
        }
    }

    static async browseCategory(req, res, next) {
        try {
            const result = await ItemCategory.findAll({
                attributes: { exclude: ['updatedAt'] }
            })

            res.status(200).json({ message: "success", data: result })
        } catch(err) {
            next(err)
        }
    }

    static async read(req, res, next) {
        try {
            const itemId = req.params.id;
            const result = await Item.findByPk(itemId, {
                attributes: { exclude: ['ItemCategoryId', 'updatedAt'] },
                include: [
                    { model: ItemCategory, attributes: { exclude: ['updatedAt'] } },
                    { model: ItemMedicineInfo, attributes: {exclude: ['updatedAt']} },
                    { model: ItemStockInfo, attributes: ['qty', 'expiredDate'],
                        required: false,
                        where: {
                            expiredDate: {
                                [Op.or]: [
                                    { [Op.gte]: new Date() }, { [Op.eq]: null }
                                ]
                            }
                        }
                    },
                    { model: ItemConversionUnit }
                ]
            })
            if(result) {
                let resultJson = result.toJSON();
                if(resultJson.ItemStockInfos.length) {
                    resultJson.totalQty = resultJson.ItemStockInfos.reduce( function(a, b){
                        return a + b.qty;
                    }, 0);
                }else{
                    resultJson.totalQty = 0
                }
                delete resultJson.ItemStockInfos

                res.status(200).json({
                    message: "success",
                    data: resultJson
                })
            }else{
                res.status(404).json({
                    message: "data not found",
                    data: null
                })
            }
        } catch(err) {
            next(err)
        }
        
    }
}

module.exports = ItemController