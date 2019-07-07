const peopleTwo = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  //Each Array
  const isAdult = peopleTwo.some(person => {
    const currentYear = (new Date()).getFullYear();
    return currentYear - person.year >= 19;
    })

    console.log({isAdult});

//every Array
    const allAdult = peopleTwo.every(person => {
        const currentYear = (new Date()).getFullYear();
        return currentYear - person.year >= 19;
        })
      console.log({allAdult});

//Find Array
        const findIdd = comments.find(function(comment){
            if(comment.id ===823423){
                return true;
            }
        })
        console.log(findIdd)

        const findId = comments.find(comment=>
            comment.id === 823423);
        console.log(findId)



//findIndex
const index = comments.findIndex(comment =>comment.id === 823423);

const newComment = [
    ...comments.slice(0, index),
    ...comments.slice(index +1),
];

