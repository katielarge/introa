var imageArray = [
"http://images.all-free-download.com/images/graphiclarge/vintage_holiday_card_311900.jpg",
"http://ctmomaha.com/wp-content/uploads/Christmas-puppies.jpg",
"http://www.commentskart.com/wp-content/uploads/2013/09/Holiday-Quotes-27.jpg",
"http://i.imgur.com/xU3znvE.jpg",
"http://tinkerliving.com/wp-content/uploads/2012/10/Holiday-Card-Pic.jpg"    

];

var currentIndex = 0;

function renderImage(){
    if (currentIndex < 0) {
     currentIndex = imageArray.length - 1;   
    } else if (currentIndex >= imageArray.length){
     currentIndex = 0   
    }
    $('#thePhoto').attr('src', imageArray[currentIndex]);
}
renderImage();

function forwardImage(){
    currentIndex++;
    renderImage();
}

function backImage(){
    currentIndex--;
    renderImage();
}

$('#forwardButton').on('click', forwardImage);
$('#backButton').on('click', backImage);

var name = prompt("What's your name?");
var outputString = "Happy Holidays, " + name + "!";
$('h1').html(outputString);

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Family Member', 'Amount of SPIRIT!'],
          ['Lance',     3],
          ['Sophia',      10],
          ['Katie',  5],
          ['Abbe', 7],
          ['Greg',    3],
          ['Jake(the puppy)',    50]  
        ]);

        var options = {
            title: 'Holiday SPIRIT Meter!! (which Large has the most spirit?)',
            titleTextStyle: {
                color: 'white'   
            },  
            backgroundColor: '#2E495A',
            legend: {
                textStyle: {
                    color: 'white'   
                }
            }
      
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }





