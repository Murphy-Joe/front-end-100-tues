describe('writing functions', () => {
  describe(`overloading a function (spoiler, you can't really`, () => {
    it('formatting a name', () => {
      function formatName(first: string, last: string): string {
        return `${last}, ${first}`
      }

      let fullName = formatName('Han', 'Solo')
      expect(fullName).toBe('Solo, Han')
    })

    it('default parameters', () => {
      function add(a: number = 10, b: number = 2): number {
        return a + b
      }
    })
  })

  describe('higher order functions', () => {
    it('creating html elements the easy way', () => {
      function createElement(tag: string, content: string): string {
        return `<${tag}>${content}</${tag}>`
      }
    })
    it('creating html elements the oop style', () => {
      class ElementMaker {
        //private tag: string
        constructor(private tag: string) {}
        // {
        //   this.tag = tag
        // }
      }
    })

    it('a functional way to do the same thing', () => {
      function elementMaker(
        tag: string,
      ): //returns
      (content: string) => string {
        return (content) => `<${tag}>${content}</${tag}>`
      }

      const h1Maker = elementMaker('h1')
      const h2Maker = elementMaker('h2')
      const pMaker = elementMaker('p')
    })
  })

  describe('Array Methods', () => {
    //map, filter, reduce, some, any
  })

  describe('object destructuring', () => {
    const friends = ['a', 'b', 'c', 'd', 'ed']

    let firstFriend = friends[0]

    expect(firstFriend).toBe('a')

    let [firstFr, , thirdFr] = friends
    let [second, , fourth, ...theRest] = friends

    it('the spread operator', () => {
      const friendList = ['a', 'b', 'c', 'd', 'ed']
      const newFriends = ['first', ...friendList, 'last']
    })

    it('destructuring objects and the spread operator on objects', () => {
      const movie = {
        title: 'star wars',
        director: 'Lucas',
        genre: 'Sci-Fi',
      }

      let { title, genre } = movie
      let { director: directedBy } = movie
    })
  })

  describe('arrary methods', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    it('forEach', () => {
      nums.forEach((num, idx, collexion) => console.log(num, idx, collexion))
      /*
          1 0 (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
          2 1 (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
          3 2 (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
          4 3 (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
          5 4 (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
          6 5 (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
          7 6 (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
          8 7 (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
          9 8 (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
        */
    })
    it('has filter', () => {})

    it('has map', () => {
      nums.map((x) => x * 2)
    })

    describe('checking stuff', () => {
      it('every element', () => {
        const allEven = nums.every((n) => n % 2 === 0) // will stop on false
      })

      it('at least one elements', () => {
        const someEvens = nums.some((n) => n % 2 === 0) // will stop on true
      })
    })
  })
  fdescribe('using the array methods', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    it('example 1', () => {
      // double each of the numbers >= 4, then sum up just the even numbers.
      numbers
        .filter((num) => num >= 4)
        .map((n) => n * 2)
        .filter((n) => n % 2 === 0)
        .reduce((state, next) => state + next)
    })
  })

  const data = [
    { name: 'Jeff', score: 89 },
    { name: 'Stacey', score: 208 },
    { name: 'Violet', score: 178 },
    { name: 'Henry', score: 108 },
  ] // These are bowling scores. I want to know who had the highest score, who had the lowest score, and what their scores were.
  // There are no ties in this example. If you figure it out, redo it so it can deal with ties.
  // (in bowling, the highest score you can get is 300, and the lowest is 0. Highest score wins)

  const result: any = {
    highScore: data.sort((a, b) => (a.score < b.score ? 1 : -1))[0].score,
    lowScore: data.sort((a, b) => (a.score > b.score ? 1 : -1))[0].score,
    lowScorer: data.sort((a, b) => (a.score > b.score ? 1 : -1))[0].name,
  } // your code here. expect(result.highScorer).toBe('Stacey');
  expect(result.highScore).toBe(208)
  expect(result.lowScorer).toBe('Jeff')
  expect(result.lowScore).toBe(89)

  it('example/practice 3', () => {
    const vehicles = [
      {
        vin: '38739893893',
        make: 'Ford',
        model: 'Bronco',
        year: 2020,
        mileage: 120_000,
      },
      {
        vin: '333383883',
        make: 'Chevy',
        model: 'Camaro',
        year: 1984,
        mileage: 310_000,
      },
      {
        vin: '899389893',
        make: 'Honda',
        model: 'Pilot',
        year: 2017,
        mileage: 89_000,
      },
      {
        vin: '8398983893',
        make: 'Range Rover',
        model: 'Evoque',
        year: 2016,
        mileage: 130_000,
      },
    ]

    // We want the make and model of all cars that have:
    // high mileage (over 100,000 miles),
    // and are newer than 2000
    const answer: string[] = vehicles
      .filter((v) => v.mileage > 100000 && v.year > 2000)
      .map((v) => `${v.make} ${v.model}`)

    expect(answer).toEqual(['Ford Bronco', 'Range Rover Evoque'])
  })
})
