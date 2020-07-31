# Stoic Quotes

A simple app that displays random Stoic quotes from Seneca, Marcus Aurelius, and Epictetus.

[stoic-quotes.com](https://stoic-quotes.com)

Please feel free to make a pull request if you want to add your favourite Stoic quote to the app 🙂

# Using the API

This app exposes a public API which you are free to use to fetch random Stoic quotes for use in your own applications.

### Endpoints

#### Get a random Stoic quote

```
GET https://stoic-quotes.com/api/quote
```

##### Example JSON response

```json
{
  "text": "All that exists is the seed of what will emerge from it.",
  "author": "Marcus Aurelius"
}
```

#### Get a list of random Stoic quotes

```
GET https://stoic-quotes.com/api/quotes
```

Optionally pass in a `num` param to change the number of quotes returned.
`num` defaults to `10`, and can not be higher than `100`.

```
GET https://stoic-quotes.com/api/quotes?num=10
```

##### Example JSON response

```json
[
  {
    "text": "All that exists is the seed of what will emerge from it.",
    "author": "Marcus Aurelius"
  },
  {
    "text": "If it doesn't harm your character, how can it harm your life?",
    "author": "Marcus Aurelius"
  }
]
```
