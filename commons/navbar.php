<!-- Navbar -->
<nav class="main-header navbar navbar-expand navbar-white navbar-light">
	<!-- Left navbar links -->
	<ul class="navbar-nav">
		<li class="nav-item">
			<a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
		</li>
		<li class="nav-item d-none d-sm-inline-block">
			<a href="index3.html" class="nav-link">Home</a>
		</li>
	</ul>

	<!-- Right navbar links -->
	<ul class="navbar-nav ml-auto">
		<li class="nav-item dropdown no-arrow">
			<a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				<span class="mr-2 d-none d-lg-inline text-gray-600 small">
					nilesh32236@gmail.com
				</span>
				<img class="img-profile rounded-circle" id="userImg" src="">
			</a>
			<div class="dropdown-menu nav-pills dropdown-menu-right shadow animated--grow-in cutome-nav-tab" aria-labelledby="userDropdown">
				<a class="dropdown-item nav-link" href="#profile" id="profileBtn" data-email="nilesh32236@gmail.com" data-toggle="tab">
					<i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
					Profile
				</a>
				<a class="dropdown-item nav-link" href="#change-password" id="passwordBtn" data-toggle="tab">
					<i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
					Change Password
				</a>
				<a class="dropdown-item nav-link" href="#activity-log" id="logsBtn" data-toggle="tab">
					<i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
					Activity Log
				</a>
				<div class="dropdown-divider"></div>
				<a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
					<i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
					Logout
				</a>
			</div>
		</li>
	</ul>
</nav>
<!-- /.navbar -->

<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
	<!-- Brand Logo -->
	<a href="index3.html" class="brand-link">
		<img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
		<span class="brand-text font-weight-light">AdminLTE 3</span>
	</a>

	<!-- Sidebar -->
	<div class="sidebar">
		<!-- Sidebar user panel (optional) -->
		<div class="user-panel mt-3 pb-3 mb-3 d-flex">
			<div class="image">
				<img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
			</div>
			<div class="info">
				<a href="#" class="d-block">Alexander Pierce</a>
			</div>
		</div>

		<!-- SidebarSearch Form -->
		<div class="form-inline">
			<div class="input-group" data-widget="sidebar-search">
				<input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
				<div class="input-group-append">
					<button class="btn btn-sidebar">
						<i class="fas fa-search fa-fw"></i>
					</button>
				</div>
			</div>
		</div>

		<!-- Sidebar Menu -->
		<nav class="mt-2">
			<ul class="nav nav-pills nav-sidebar flex-column cutome-nav-tab" data-widget="treeview" role="menu" data-accordion="false">
				<li class="nav-item">
					<a href="#dashboard" class="nav-link active dashboard" data-toggle="tab">
						<i class="nav-icon fas fa-home"></i>
						<p>Dashboard</p>
					</a>
				</li>
				<li class="nav-item">
					<a href="#image-gallary" class="nav-link categories" data-toggle="tab">
						<i class="nav-icon fas fa-list"></i>
						<p>Image Gallary</p>
					</a>
				</li>
				<li class="nav-item">
					<a href="#video-gallary" class="nav-link products" data-toggle="tab">
						<i class="nav-icon fas fa-box"></i>
						<p>Video Gallary</p>
					</a>
				</li>
				<li class="nav-item">
					<a href="#users" class="nav-link users" data-toggle="tab">
						<i class="nav-icon fas fa-users"></i>
						<p>Users</p>
					</a>
				</li>
			</ul>
		</nav>
		<!-- /.sidebar-menu -->
	</div>
	<!-- /.sidebar -->
</aside>

<div class="modal fade" id="logoutModal" tabindex="-1" aria-labelledby="exampleModalLabel" style="display: none;" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
				<button class="close" type="button" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">×</span>
				</button>
			</div>
			<div class="modal-body">Select "Logout" below if you are ready to end your current session.
			</div>
			<div class="modal-footer">
				<button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
				<a class="btn btn-primary" href="logout.php">Logout</a>
			</div>
		</div>
	</div>
</div>
