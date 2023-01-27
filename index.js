
	let fruits = ["apple", "mango", "apple",
			"orange", "mango", "mango"];
            console.log(fruits)
	
	function general(arr) {
		return fruits.filter((item,
			index) => fruits.indexOf(item) === index);
	}
	
	console.log(general(fruits));






   
    let verse = "maajabu ya musa na firaoni";
    let result = verse.includes("na");
    console.log(result)



    let names=["frank","muthomi"
    ];
    let reverse= names[1],[0];
    console.log(reverse);