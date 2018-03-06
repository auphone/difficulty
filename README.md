Evaluating English word difficulty using word frequency data

## Installation

```sh
cd ~/my-project/
npm install difficulty --save
```

## Basic Usage

### Async/Await
Welcome to ES7! ⎝( OωO)⎠
```js
import { create } from 'difficulty';

(async () => {
  try {
    const difficulty = await create();
    const a = difficulty.getLevel('apple');
    const b = difficulty.getLevel('cappuccino');

    console.log(`apple is level ${a}, easy!`);
    console.log(`cappuccino is level ${b}, too hard!`);
  } catch(err) {
    console.error(err);
  }
})();
```

#### Output

```sh
apple is level 0, easy!
cappuccino is level 3, so hard!
```

## Old schooler?
```js
const Difficulty = require('difficulty');

// Using Promise
Difficulty.create().then((difficulty) => {
  ...
});

// Sync is available too!
const difficulty = Difficulty.createSync();
```


## API
```js
Difficulty.create(options)
```

#### filepath
Path to your csv file, in following format.
```sh
"Word","Freq_HAL"
"a","10610626"
...
```
Default: `./node_modules/difficulty/wordlist/wordlist.csv`


#### levelsThreshold
Define your own levels with frequency threshold in descending order.

Default: `[20000, 10000, 5000]`

```sh
- Level 0: freq > 20000
- Level 1: 10001 to 20000
- Level 2: 5001 to 10000
- Level 3: < 5000 or **non exist words**
```

## License
ISC

**Important**

*The default word frequency data is generated from [English Lexicon Project](http://elexicon.wustl.edu/WordStart.asp), which is for non-commercial research purposes only and may not be used in the development of speech technology. You should consider using your own wordlist for other purpose.*

## Author
[github/auphone](https://github.com/auphone)


Good luck! σ`∀´)σ
