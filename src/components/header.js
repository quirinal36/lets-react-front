const Header = () => {
    return (
        <div id="header-wrap">
			<h1>
				<a href="/">
					<img src="img/logo.png" alt="렛츠코딩앤플레이"></img>	
				</a>
			</h1>
			<div id="nav-wrap">
				<div id="nav-layer">
					<div class="top">
						<a href="/" class="logo">
							<img src="img/logo-white.png" alt="렛츠코딩앤플레이"></img>
						</a>
					</div>
                    <div class="menu-list">
						<nav>
							<a href="/coding">코딩</a>{" "}|{" "}
							<a href="/coding">상담 안내</a>{" "}|{" "}
							<a href="https://letscoding.synology.me/mail">학원 이메일</a>	
						</nav>                        
                    </div>
				</div>
				
			</div>
		</div>
    )
};

export default Header;