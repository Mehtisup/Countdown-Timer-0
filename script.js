<script>
var countdown = new Date("Jan 11, 2030 04:20:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime(); 

    var distance = countdown - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    var seconds = Math.floor((distance % (1000 * 60)) / (1000));

    document.getElementById("countdown").innerHTML = days + " <span style='color:red'> days </span> " + hours + " <span style='color:blue'> hours  </span>" + minutes + "<span style='color:seagreen'> minutes </span> " + seconds + " <span style='color:#333'> seconds </span> ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Done!";
    }

})
</script>
