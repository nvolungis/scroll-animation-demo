<?php require 'lib/dirlist.php'; ?>

<html>
<head>
	 <title>Conover Tuttle Pace</title>
   <link rel="stylesheet" href="styles.css" />
   <script type="text/javascript" src="jquery.js"></script>
   <script type="text/javascript" src="textactions.js"></script>
   <script type="text/javascript" src="progressbar.js"></script>
   <script type="text/javascript" src="skip.js"></script>
   <script type="text/javascript" src="imgAnimate.js"></script>
   <script type="text/javascript" src="script.js"></script>
</head>
<body>
  <?php dirlist('ctp3'); ?>
	<div id="status" class=""></div>
	<div id="spacer"></div>
	<div id='progressbar' class='scrollable' data-start='0' data-end='95'></div>
	<div id='skip' class='scrollable' data-start='0' data-end='95'><img src="assets/images/skip.png" alt="skip" /></div>
	<div id='topbar'>
	 <div id='logo'><img src="assets/images/ctp_logo.png" alt="ctp_logo" /></div>
	 <div id='menu'><img src="assets/images/nav.png" alt="nav"  /></div>
	</div>
	
	<canvas id="canvas"></canvas>

	
	<div id="wrapper" class='sections'>
  	
  	<div class='option-1'>
    	<section id='one' class='scrollable' data-start='0' data-end='25'>
    	 <img src="assets/images/1.png" alt="1" />
      </section>  	
    	<section id='two' class='scrollable' data-start='33' data-end='56'>
      	<img src="assets/images/2.png" alt="2" />
    	</section>  
    	<section id='three' class='scrollable' data-start='63' data-end='83'>
    	  <img src="assets/images/3.png" alt="3" />
    	</section>	
    	
    	<section id='four' class='scrollable'data-start='95' data-end='100'>
    	   <span id='were-ctp'>
    	     <img src="assets/images/end_werectp.png" />
    	   </span>
    	   <span id='help'>
    	      <img src="assets/images/end_whatcanwehelpyouwith.png" />
    	   </span>
    	   
    	   <span id='band'>
    	     <img src="assets/images/end_orangestrip.png" alt="end_orangestrip" />
    	   </span>
    	   
    	   <span id='know'>
      	   <img src="assets/images/end_gettoknow.png" alt="end_gettoknow" width="263" height="35" />
    	   </span>
    	</section>	
    	
    	<section id='scroll' class='scrollable' data-start='-1' data-end='1'>
    	 <img src="assets/images/scroll.png" alt="scroll" />
      </section>
  	</div>
    
	</div>

</body>
</html>