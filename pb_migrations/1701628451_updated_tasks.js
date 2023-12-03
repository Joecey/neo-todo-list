migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t46cxlf96tpunkw")

  collection.createRule = "user = @request.auth.id"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ottgnqxj",
    "name": "user",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t46cxlf96tpunkw")

  collection.createRule = null

  // remove
  collection.schema.removeField("ottgnqxj")

  return dao.saveCollection(collection)
})
