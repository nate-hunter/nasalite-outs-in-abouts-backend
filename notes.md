# Notes

## Models:
**Spots** 
```javascript 
  {
    username: String!,
    title: String!,
    description: String!,
    rating: Number, min: 0, max: 5,
    lat: Number!,
    lon: Number!,
    location: String,  // e.g., Neighborhood
    img: String,
    priority: Number, min: 0, max: 5,
    occasion: String,
  }
```

**Users**
```javascript
  {
    username: String!, min: 3, max: 25,
    email: String!, max: 50,
    password: String!, min: 6,
    avatar: String,
    about: String,
  }
```

## Additions to appl
* comments to Spots


## Comments on code:
(index.js):  
  ```javascript 
    app.use(express.json());  // this allows us to use anything as a JSON
  ```

