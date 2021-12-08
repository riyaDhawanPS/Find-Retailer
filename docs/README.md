# Find Retailer

The Find Retailer app fetches the Pickup point data in order to display address location for retail stores.

## Configuration

1. [Install](https://vtex.io/docs/recipes/development/installing-an-app/) the Find Retailer app in your VTEX account by running `vtex install publicissapient.find-retailer` in your terminal.
2. In your account's admin page, select **Inventory&Shipping** section and then acess **Settings**.
3. Type in the Google Geolocation API key and save your changes.
4. Open your Store Theme app directory in your code editor.
5. Add the Find Retailer app as a `peerDependency` in the `manifest.json` file:

```diff
 "peerDependencies": {
+  "publicissapient.find-retailer": "0.x"
 }
```

### Advanced configuration

In order to define the Find Retailer custom page UI, you must use the blocks exported by the `publicissapient.find-retailer` app. Namely, they are:

1. Open your Store Theme app directory in your code editor.
2. In the `store/blocks` folder of your Store Theme app, create a new file called `storelocator.json`.
3. Create a new store template in it called `store.storelocator`. In its blocks array, paste the default implementation stated below:

```json
{
  "store.storelocator": {
    "blocks": ["flex-layout.row#title", "flex-layout.row#container"]
  },
  "flex-layout.row#title": {
    "children": ["flex-layout.col#title"]
  },
  "flex-layout.row#container": {
    "children": ["store-list"]
  },
  "flex-layout.col#title": {
    "children": ["rich-text#title"],
    "props": {
      "blockClass": "title",
      "preventVerticalStretch": true
    }
  },
  "rich-text#title": {
    "props": {
      "text": "## Find Retailer"
    }
  },
  "store.storedetail": {
    "blocks": ["flex-layout.row#titleStore", "store-group"]
  },
  "store-group": {
    "children": ["flex-layout.row#containerStore"],
    "props": {
      "title": "{storeName} Store"
    }
  },
  "flex-layout.row#titleStore": {
    "children": ["flex-layout.col#titleStore"]
  },
  "flex-layout.row#containerStore": {
    "children": ["flex-layout.col#detail", "flex-layout.col#store"]
  },
  "flex-layout.col#titleStore": {
    "children": ["rich-text#titleStore"],
    "props": {
      "blockClass": "title",
      "preventVerticalStretch": true
    }
  },
  "rich-text#titleStore": {
    "props": {
      "text": "## Store Detail"
    }
  },
}
```
Forked this code from "https://github.com/vtex-apps/store-locator" and made some modifications for our requirement.
