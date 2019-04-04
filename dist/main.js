
const fetch = function () {

    const text = $("#input-text").val()
    console.log(text)

    $.ajax({
        method: "GET",
        url: `http://www.recipepuppy.com/api/?&q=${text}`,
        success: function (data) {
            
            console.log(data)
            
            const recipe = data.results[0]

            console.log(recipe)

            // $( "body").append( );
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}