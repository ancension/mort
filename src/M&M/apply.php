<!DOCTYPE html>
<html>

<?php




<head>

<meta charset="UTF-8">
<link rel="stylesheet" href="style3.css">
<link rel="icon" type="image/x-icon" href="img/logo.ico">
<title>M&M Cat Insurance - Home</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>

	<header>
		<div class="top">
			<a href="#home">
				<img class="logo" src="img/logo.png" width= "80px" height= "80px" alt"Home">
			</a>
				<img class="company" src="img/mainwhite.png">
		
			<a class="cta" href="apply.html"><button>Apply Now
			</button></a></ul>
		</div>
		
		<nav>
			<ul class="navbar">
				<li><a href="index.html">Home<a/></li>
				<li><a href="terms.html">Terms of Service</a></li></ul>
		</nav>
		
		
	</header>

     <div class="">
        <form>
          <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
            <input type="email" name="email" placeholder="Email" required />
          </div>

          <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
            <input type="password" name="password" placeholder="Password" required />
          </div>
          <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
            <input type="password" name="password" placeholder="Re-type Password" required />
          </div>
          <div class="row clearfix">
            <div class="col_half">
              <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                <input type="text" name="name" placeholder="First Name" />
              </div>
            </div>
            <div class="col_half">
              <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                <input type="text" name="name" placeholder="Last Name" required />
              </div>
            </div>

            <div class="col_half">
              <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                <input type="text" name="cat name" placeholder="Cat Name" required />
              </div>
            </div>

            <div class="col_half">
              <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                <input type="Number" name="phone" placeholder="Phone Number" required />
              </div>
            </div>

            <div class="input-box"
					<span class="details">Cat Color	<br></span>
				<select>
					<option value="Placeholder">--Cat Color--</option>
					<option value="Black">Black</option>
					<option value="White">White</option>
					<option value="Brown">Brown</option>
					<option value="Orange">Orange</option>
					<option value="Blue">Blue</option>
					<option value="Green">Green</option>
					<option value="Pink">Pink</option>
					<option value="Bad Luck">Bad Luck</option>
					<option value="Multi-colored">Multi-colored</option>
					<option value="Others">Others</option>
				</select>
			</div>

          </div>
            	<div class="input_field radio_option">
              <input type="radio" name="radiogroup1" id="rd1">
              <label for="rd1">Male</label>
              <input type="radio" name="radiogroup1" id="rd2">
              <label for="rd2">Female</label>
              </div>
              <div class="input_field select_option">
                <select>
                  <option>Select a country</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
                <div class="select_arrow"></div>
              </div>
            <div class="input_field checkbox_option">
            	<input type="checkbox" id="cb1">
    			<label for="cb1">I agree with <a href="terms.html" class="termers">terms and conditions</label>
            </div>
          <input class="button" type="submit" value="Register" />
        </form>
      </div>
    </div>
	


</body>
</html>