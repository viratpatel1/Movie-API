
function getInputValue()
{
    // var inputVal = document.getElementById("myInput").value;

    //Declaring the API Variale

    const API_KEY = "5621c245aabd3c7a83577f8895c90e05";
    const API_URL = "https://api.themoviedb.org/3/";
    const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/w300/';
    var num = Math.floor(Math.random() * 500);
    var num1 = Math.floor(Math.random() * 20);


    //Fetch method to fetch the API 
    fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${num}`, { method: "get" })
        .then(res => res.json())
        .then(res =>
        {
            var title = res.results[num1].title
            var poster_path = res.results[num1].poster_path
            var release_date = res.results[num1].release_date
            document.getElementById("image").src = IMAGE_BASE_URL + poster_path
            document.getElementById("title").innerHTML = title
            document.getElementById("realease").innerHTML = release_date
        }
        )
}




// Below Are The Differnt Method Which I tried to Go With

            // console.log(title, release_date)
            // {
            //     var detail = res.results[Math.floor(Math.random() * 20)]
            //     // console.log(detail)
            //     detail.forEach(ele =>
            //     {
            //         console.log(ele.name)

            //     });



            // }
            // console.log(res.results[num1].title)
            // {
            //     res.results.map((data) => 
            //     {
            //         const { title, poster_path, release_date } = data;
            //         console.log(title, release_date)
            //         // document.getElementById("option").innerHTML = res.results.name

            //         // document.getElementById("title").innerHTML = title


            //         // if (inputVal == title)
            //         // {
            //         //     document.getElementById("image").src = IMAGE_BASE_URL + poster_path
            //         //     document.getElementById("title").innerHTML = title
            //         //     document.getElementById("realease").innerHTML = release_date
            //         // }
            //     })

            // }


