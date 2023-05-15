migrate((db) => {
  const collection = new Collection({
    "id": "t46cxlf96tpunkw",
    "created": "2023-05-12 21:36:44.643Z",
    "updated": "2023-05-12 21:36:44.643Z",
    "name": "tasks",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "srivl693",
        "name": "info",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      },
      {
        "system": false,
        "id": "otmwjzti",
        "name": "dateDue",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("t46cxlf96tpunkw");

  return dao.deleteCollection(collection);
})
