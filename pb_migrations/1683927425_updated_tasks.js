migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t46cxlf96tpunkw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9b1alkgm",
    "name": "title",
    "type": "text",
    "required": true,
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9b1alkgm",
    "name": "title",
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
})
