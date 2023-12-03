migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t46cxlf96tpunkw")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t46cxlf96tpunkw")

  collection.createRule = null

  return dao.saveCollection(collection)
})
