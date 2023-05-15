migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t46cxlf96tpunkw")

  // remove
  collection.schema.removeField("gy9mbim3")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t46cxlf96tpunkw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gy9mbim3",
    "name": "dateCreated",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
