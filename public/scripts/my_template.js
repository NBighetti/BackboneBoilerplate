var tpl = _.template("<h1> I am <%= name %>, my favorite movie is <%= movie> and my favorite city is <%= city >. I love WDI for <%= reason >.</h1>");

var data {
  name: "Alice",
  movie: "The Big Lebowski",
  city: "Chicago",
  reason: "row 2"
};
var rendered_template = tpl(data);
$('body').html(rendered_template);
}
});


//Interesting Fact about Alice?
// create a template
var tpl = _.template("<h1>Hello, I am <%= name %>! I enjoy <%= hobby %> and <%= food %>.</h1>");
// some data object
var data = {
  name: "James",
  hobby: "writing software",
  food: "sunflower seeds"
};
// replace $('body')'s html with it
console.log("first pass");
var rendered_template = tpl(data);
$('body').html(rendered_template);

// can also be written as this.. and changed the data
console.log("second pass");
data.food = "Sunflower butter & lignon berry sandwiches";
$('body').html(tpl(data));
