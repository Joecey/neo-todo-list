migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t46cxlf96tpunkw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fwphehzq",
    "name": "complete",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t46cxlf96tpunkw")

  // remove
  collection.schema.removeField("fwphehzq")

  return dao.saveCollection(collection)
})
