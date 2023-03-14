function zegar()
      {

        var today = new Date();
        return  today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();

      }
      
    
      setInterval(function() {
      	document.getElementById('zegar').innerHTML = zegar();
      }, 1000);
