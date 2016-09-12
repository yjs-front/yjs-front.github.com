



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-08a7ddd5fb70803ff8390bcae350fe24cca52e8a1266dedb493c666c1d625366.css" integrity="sha256-CKfd1ftwgD/4OQvK41D+JMylLooSZt7bSTxmbB1iU2Y=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-09d197b2001b1f26848c0014339efea1e35276ca3fe01b04e4842562feb31fe0.css" integrity="sha256-CdGXsgAbHyaEjAAUM57+oeNSdso/4BsE5IQlYv6zH+A=" media="all" rel="stylesheet" />
    
    
    
    
    

    <link as="script" href="https://assets-cdn.github.com/assets/frameworks-149d9338c2665172870825c78fa48fdcca4d431d067cbf5fda7120d9e39cc738.js" rel="preload" />
    
    <link as="script" href="https://assets-cdn.github.com/assets/github-109daf4a404ee43b316c94cbb025dd5c390990eacc3b1d807ec6e1150039af02.js" rel="preload" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=device-width">
    
    
    <title>qrcode/index.js at master · aralejs/qrcode</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars2.githubusercontent.com/u/1843069?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="aralejs/qrcode" name="twitter:title" /><meta content="qrcode - 二维码生成模块" name="twitter:description" />
      <meta content="https://avatars2.githubusercontent.com/u/1843069?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="aralejs/qrcode" property="og:title" /><meta content="https://github.com/aralejs/qrcode" property="og:url" /><meta content="qrcode - 二维码生成模块" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MTk5ODU1MTM6OTliOGNmNjkzMDFhNmEyNzZkMDJjOGI4YzMyZjQyNTU6NmMyYzJkZDg4NWFjNjNlMzFhYWVlMDQxY2FkMGVjNTRlN2Y1NjI2OTE5M2MyZjYzMDVmMzFmZmZjN2M0N2RhMQ==--3102ee92d4802135738569b2299269c96cd8173c">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="6BB2C3AE:1E08:B3A07B4:577F020C" name="octolytics-dimension-request_id" /><meta content="19985513" name="octolytics-actor-id" /><meta content="yyfax" name="octolytics-actor-login" /><meta content="63022358fd2035602e2d0e7f5c8d414aa5a594fb72fa97e3fd5e71c181046619" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="yyfax">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="OGIwNmRlZTc4MThmM2FjZDIyYTMxNWViZjQ1NmZmZTM1MzdmMmM0YjA5ZGVkNzI2ODM3MzY4MjA1ZTg1MGI3NXx7InJlbW90ZV9hZGRyZXNzIjoiMTA3LjE3OC4xOTUuMTc0IiwicmVxdWVzdF9pZCI6IjZCQjJDM0FFOjFFMDg6QjNBMDdCNDo1NzdGMDIwQyIsInRpbWVzdGFtcCI6MTQ2Nzk0MTM4OX0=">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta name="html-safe-nonce" content="7ff719ea001100b319e3223da2705027736000fe">
    <meta content="2c1dfccaf527a5aeb7b25ed37f353df552bb444f" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="2e030763bd43d9f312dc4dd246de173e">
    

      
  <meta name="description" content="qrcode - 二维码生成模块">
  <meta name="go-import" content="github.com/aralejs/qrcode git https://github.com/aralejs/qrcode.git">

  <meta content="1843069" name="octolytics-dimension-user_id" /><meta content="aralejs" name="octolytics-dimension-user_login" /><meta content="14416710" name="octolytics-dimension-repository_id" /><meta content="aralejs/qrcode" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="14416710" name="octolytics-dimension-repository_network_root_id" /><meta content="aralejs/qrcode" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/aralejs/qrcode/commits/master.atom" rel="alternate" title="Recent Commits to qrcode:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/aralejs/qrcode/blob/master/dist/arale-qrcode/3.0.5/index.js" data-pjax-transient>
  </head>


  <body class="logged-in   env-production windows vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/aralejs/qrcode/search" class="js-site-search-form" data-scoped-search-url="/aralejs/qrcode/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        tabindex="1"
        autocapitalize="off">
    </label>
</form></div>


      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
    

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"></path></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="aralejs/qrcode">This repository</span>
  </div>
    <a class="dropdown-item" href="/aralejs/qrcode/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/yyfax"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@yyfax" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/19985513?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">yyfax</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/yyfax" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>


        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="2c1dfccaf527a5aeb7b25ed37f353df552bb444f" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="RJK94xumQo9XBYwaQHX06MXDk5elow11LUDJWGhYU9Wusurwdbqw/gKM8+n72dnGpVewxk8WjDuJSIFnoLn9WA==" /></div>
          <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>


      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="2c1dfccaf527a5aeb7b25ed37f353df552bb444f" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="nD01Gi8AQHy9hqTjwbCTcdvDWYYKPsmYXA+6dTxvJ1MRrqCijG1buDk/IubMBsdwF58YRYe28uUkQsG0PFMNfQ==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="14416710" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/aralejs/qrcode/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count" href="/aralejs/qrcode/watchers">
            40
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"></path></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/aralejs/qrcode/unstar" class="starred" data-form-nonce="2c1dfccaf527a5aeb7b25ed37f353df552bb444f" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="0c5B4vUxNhFVqxgycrmqYSY+FG9H7mvaGiVLQ1n5EmzMe/nmRad8qxh2BngyuoFRHbLU/Yl08FAK7ubaEyU2Qg==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar aralejs/qrcode"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/aralejs/qrcode/stargazers">
          200
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/aralejs/qrcode/star" class="unstarred" data-form-nonce="2c1dfccaf527a5aeb7b25ed37f353df552bb444f" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="9Zrk/ZErod1nD6xqnqzpV3E2Fjj2AAR33KTXT653RNmLhx74i6d+CZ3v0U1b7Q8OVywaLc+h+6AScCQ7+z80Cg==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star aralejs/qrcode"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/aralejs/qrcode/stargazers">
          200
        </a>
</form>  </div>

  </li>

  <li>
          <a href="#fork-destination-box" class="btn btn-sm btn-with-count"
              title="Fork your own copy of aralejs/qrcode to your account"
              aria-label="Fork your own copy of aralejs/qrcode to your account"
              rel="facebox"
              data-ga-click="Repository, show fork modal, action:blob#show; text:Fork">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
            Fork
          </a>

          <div id="fork-destination-box" style="display: none;">
            <h2 class="facebox-header" data-facebox-id="facebox-header">Where should we fork this repository?</h2>
            <include-fragment src=""
                class="js-fork-select-fragment fork-select-fragment"
                data-url="/aralejs/qrcode/fork?fragment=1">
              <img alt="Loading" height="64" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" width="64" />
            </include-fragment>
          </div>

    <a href="/aralejs/qrcode/network" class="social-count">
      78
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
  <span class="author" itemprop="author"><a href="/aralejs" class="url fn" rel="author">aralejs</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/aralejs/qrcode" data-pjax="#js-repo-pjax-container">qrcode</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/aralejs/qrcode" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /aralejs/qrcode" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/aralejs/qrcode/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /aralejs/qrcode/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">6</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/aralejs/qrcode/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /aralejs/qrcode/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">1</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/aralejs/qrcode/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /aralejs/qrcode/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"></path></svg>
      Wiki
</a>

  <a href="/aralejs/qrcode/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /aralejs/qrcode/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"></path></svg>
    Pulse
</a>
  <a href="/aralejs/qrcode/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /aralejs/qrcode/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"></path></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/aralejs/qrcode/blob/56ad8b099fff4285960ad46d3fd0160b1fca70c6/dist/arale-qrcode/3.0.5/index.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:b4c1902231a03c1ea9b4027141cb8781 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/aralejs/qrcode/blob/cmd/dist/arale-qrcode/3.0.5/index.js"
               data-name="cmd"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="cmd">
                cmd
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/aralejs/qrcode/blob/develop-3.0.6/dist/arale-qrcode/3.0.5/index.js"
               data-name="develop-3.0.6"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="develop-3.0.6">
                develop-3.0.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/aralejs/qrcode/blob/master/dist/arale-qrcode/3.0.5/index.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/aralejs/qrcode/tree/3.0.5/dist/arale-qrcode/3.0.5/index.js"
              data-name="3.0.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="3.0.5">
                3.0.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/aralejs/qrcode/tree/3.0.4/dist/arale-qrcode/3.0.5/index.js"
              data-name="3.0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="3.0.4">
                3.0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/aralejs/qrcode/tree/3.0.1/dist/arale-qrcode/3.0.5/index.js"
              data-name="3.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="3.0.1">
                3.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/aralejs/qrcode/tree/3.0.0/dist/arale-qrcode/3.0.5/index.js"
              data-name="3.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="3.0.0">
                3.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/aralejs/qrcode/tree/2.0.0/dist/arale-qrcode/3.0.5/index.js"
              data-name="2.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.0.0">
                2.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/aralejs/qrcode/tree/1.1.0/dist/arale-qrcode/3.0.5/index.js"
              data-name="1.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.0">
                1.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/aralejs/qrcode/tree/1.0.3/dist/arale-qrcode/3.0.5/index.js"
              data-name="1.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.3">
                1.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/aralejs/qrcode/tree/1.0.2/dist/arale-qrcode/3.0.5/index.js"
              data-name="1.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.2">
                1.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/aralejs/qrcode/tree/1.0.1/dist/arale-qrcode/3.0.5/index.js"
              data-name="1.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.1">
                1.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/aralejs/qrcode/tree/1.0.0/dist/arale-qrcode/3.0.5/index.js"
              data-name="1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.0">
                1.0.0
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/aralejs/qrcode/find/master"
          class="js-pjax-capture-input btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/aralejs/qrcode"><span>qrcode</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/aralejs/qrcode/tree/master/dist"><span>dist</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/aralejs/qrcode/tree/master/dist/arale-qrcode"><span>arale-qrcode</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/aralejs/qrcode/tree/master/dist/arale-qrcode/3.0.5"><span>3.0.5</span></a></span><span class="separator">/</span><strong class="final-path">index.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/aralejs/qrcode/commit/6c7b4180b4514a1065ecb0e0e44212f8ad129309" data-pjax>
          6c7b418
        </a>
        <relative-time datetime="2015-09-29T12:15:19Z">Sep 29, 2015</relative-time>
      </span>
      <div>
        <img alt="" class="avatar" height="20" src="https://1.gravatar.com/avatar/9b5cec0fd92ba53d61c3016ecf6babf8?d=https%3A%2F%2Fassets-cdn.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&amp;r=x&amp;s=140" width="20" />
        <span class="user-mention">叶言</span>
          <a href="/aralejs/qrcode/commit/6c7b4180b4514a1065ecb0e0e44212f8ad129309" class="message" data-pjax="true" title="canvas 模式在 Retina 下显示模糊">canvas 模式在 Retina 下显示模糊</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>0</strong>
         contributors
      </button>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/aralejs/qrcode/raw/master/dist/arale-qrcode/3.0.5/index.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/aralejs/qrcode/blame/master/dist/arale-qrcode/3.0.5/index.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/aralejs/qrcode/commits/master/dist/arale-qrcode/3.0.5/index.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/aralejs/qrcode?branch=master&amp;filepath=dist%2Farale-qrcode%2F3.0.5%2Findex.js"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/aralejs/qrcode/edit/master/dist/arale-qrcode/3.0.5/index.js" class="inline-form js-update-url-with-hash" data-form-nonce="2c1dfccaf527a5aeb7b25ed37f353df552bb444f" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="1/JEl0zBEWNY64DUPUT3NiFzimGS+OdyyUyyAaSjJKJ3pDQvqmrw7Uecpvf3YOOTXD6PqEzo9RCjfBSmtpdqGA==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/aralejs/qrcode/delete/master/dist/arale-qrcode/3.0.5/index.js" class="inline-form" data-form-nonce="2c1dfccaf527a5aeb7b25ed37f353df552bb444f" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="34haRxNtBS0QGLcCZt12KJxvSN2fno60e6A1D/UAiPv201PcF81oZUo2RpvbDUZqgwOlYdwvM2+360lFlulGJw==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"></path></svg>
          </button>
</form>  </div>

  <div class="file-info">
      1 lines (1 sloc)
      <span class="file-info-divider"></span>
    16.4 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">this.AraleQRCode=function(t){function e(o){if(r[o])return r[o].exports;var i=r[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var r={};return e.m=t,e.c=r,e.p=&quot;&quot;,e(0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){&quot;use strict&quot;;t.exports=r(2)},function(t,e,r){&quot;use strict&quot;;var o=r(4),i=[],n=r(3),s=function(t){var e=t.options;return e.pdground&amp;&amp;(t.row&gt;1&amp;&amp;t.row&lt;5&amp;&amp;t.col&gt;1&amp;&amp;t.col&lt;5||t.row&gt;t.count-6&amp;&amp;t.row&lt;t.count-2&amp;&amp;t.col&gt;1&amp;&amp;t.col&lt;5||t.row&gt;1&amp;&amp;t.row&lt;5&amp;&amp;t.col&gt;t.count-6&amp;&amp;t.col&lt;t.count-2)?e.pdground:e.foreground},u=function(t){var e=t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/e},a=function(t){&quot;string&quot;==typeof t&amp;&amp;(t={text:t}),this.options=o({},{text:&quot;&quot;,render:&quot;&quot;,size:256,correctLevel:3,background:&quot;#ffffff&quot;,foreground:&quot;#000000&quot;,image:&quot;&quot;,imageSize:30},t);for(var e=null,r=0,s=i.length;s&gt;r;r++)if(i[r].text==this.options.text&amp;&amp;i[r].text.correctLevel==this.options.correctLevel){e=i[r].obj;break}if(r==s&amp;&amp;(e=new n(this.options.text,this.options.correctLevel),i.push({text:this.options.text,correctLevel:this.options.correctLevel,obj:e})),this.options.render)switch(this.options.render){case&quot;canvas&quot;:return this.createCanvas(e);case&quot;table&quot;:return this.createTable(e);case&quot;svg&quot;:return this.createSVG(e);default:return this.createDefault(e)}return this.createDefault(e)};o(a.prototype,{createDefault:function(t){var e=document.createElement(&quot;canvas&quot;);if(e.getContext)return this.createCanvas(t);var r=&quot;http://www.w3.org/2000/svg&quot;;return document.createElementNS&amp;&amp;document.createElementNS(r,&quot;svg&quot;).createSVGRect?this.createSVG(t):this.createTable(t)},createCanvas:function(t){var e=this.options,r=document.createElement(&quot;canvas&quot;),o=r.getContext(&quot;2d&quot;),i=t.getModuleCount(),n=u(o),a=e.size,l=a*n,h=e.imageSize*n,g=function(t,e){var r=new Image;r.src=t,r.onload=function(){e(this),r.onload=null}},c=(l/i).toPrecision(4),f=(l/i).toPrecision(4);r.width=l,r.height=l;for(var d=0;i&gt;d;d++)for(var m=0;i&gt;m;m++){var p=Math.ceil((m+1)*c)-Math.floor(m*c),v=Math.ceil((d+1)*c)-Math.floor(d*c),b=s({row:d,col:m,count:i,options:e});o.fillStyle=t.modules[d][m]?b:e.background,o.fillRect(Math.round(m*c),Math.round(d*f),p,v)}return e.image&amp;&amp;g(e.image,function(t){var e=((l-h)/2).toFixed(2),r=((l-h)/2).toFixed(2);o.drawImage(t,e,r,h,h)}),r.style.width=a+&quot;px&quot;,r.style.height=a+&quot;px&quot;,r},createTable:function(t){var e=this.options,r=t.getModuleCount(),o=Math.floor(e.size/r),i=Math.floor(e.size/r);0&gt;=o&amp;&amp;(o=80&gt;r?2:1),0&gt;=i&amp;&amp;(i=80&gt;r?2:1);var n=[];n.push(&#39;&lt;table style=&quot;border:0px; margin:0px; padding:0px; border-collapse:collapse; background-color:&#39;+e.background+&#39;;&quot;&gt;&#39;);for(var u=0;r&gt;u;u++){n.push(&#39;&lt;tr style=&quot;border:0px; margin:0px; padding:0px; height:&#39;+i+&#39;px&quot;&gt;&#39;);for(var a=0;r&gt;a;a++){var l=s({row:u,col:a,count:r,options:e});t.modules[u][a]?n.push(&#39;&lt;td style=&quot;border:0px; margin:0px; padding:0px; width:&#39;+o+&quot;px; background-color:&quot;+l+&#39;&quot;&gt;&lt;/td&gt;&#39;):n.push(&#39;&lt;td style=&quot;border:0px; margin:0px; padding:0px; width:&#39;+o+&quot;px; background-color:&quot;+e.background+&#39;&quot;&gt;&lt;/td&gt;&#39;)}n.push(&quot;&lt;/tr&gt;&quot;)}if(n.push(&quot;&lt;/table&gt;&quot;),e.image){var h=o*r,g=i*r,c=((h-e.imageSize)/2).toFixed(2),f=((g-e.imageSize)/2).toFixed(2);n.unshift(&quot;&lt;div style=&#39;position:relative;\n                        width:&quot;+h+&quot;px;\n                        height:&quot;+g+&quot;px;&#39;&gt;&quot;),n.push(&quot;&lt;img src=&#39;&quot;+e.image+&quot;&#39;\n                        width=&#39;&quot;+e.imageSize+&quot;&#39;\n                        height=&#39;&quot;+e.imageSize+&quot;&#39;\n                        style=&#39;position:absolute;left:&quot;+c+&quot;px; top:&quot;+f+&quot;px;&#39;&gt;&quot;),n.push(&quot;&lt;/div&gt;&quot;)}var d=document.createElement(&quot;span&quot;);return d.innerHTML=n.join(&quot;&quot;),d.firstChild},createSVG:function(t){var e=this.options,r=t.getModuleCount(),o=r/e.size,i=document.createElementNS(&quot;http://www.w3.org/2000/svg&quot;,&quot;svg&quot;);i.setAttribute(&quot;width&quot;,e.size),i.setAttribute(&quot;height&quot;,e.size),i.setAttribute(&quot;viewBox&quot;,&quot;0 0 &quot;+r+&quot; &quot;+r);for(var n=0;r&gt;n;n++)for(var u=0;r&gt;u;u++){var a=document.createElementNS(&quot;http://www.w3.org/2000/svg&quot;,&quot;rect&quot;),l=s({row:n,col:u,count:r,options:e});a.setAttribute(&quot;x&quot;,u),a.setAttribute(&quot;y&quot;,n),a.setAttribute(&quot;width&quot;,1),a.setAttribute(&quot;height&quot;,1),a.setAttribute(&quot;stroke-width&quot;,0),t.modules[n][u]?a.setAttribute(&quot;fill&quot;,l):a.setAttribute(&quot;fill&quot;,e.background),i.appendChild(a)}if(e.image){var h=document.createElementNS(&quot;http://www.w3.org/2000/svg&quot;,&quot;image&quot;);h.setAttributeNS(&quot;http://www.w3.org/1999/xlink&quot;,&quot;href&quot;,e.image),h.setAttribute(&quot;x&quot;,((r-e.imageSize*o)/2).toFixed(2)),h.setAttribute(&quot;y&quot;,((r-e.imageSize*o)/2).toFixed(2)),h.setAttribute(&quot;width&quot;,e.imageSize*o),h.setAttribute(&quot;height&quot;,e.imageSize*o),i.appendChild(h)}return i}}),t.exports=a},function(t,e){&quot;use strict&quot;;function r(t){var e,r,o;return 128&gt;t?[t]:2048&gt;t?(e=192+(t&gt;&gt;6),r=128+(63&amp;t),[e,r]):(e=224+(t&gt;&gt;12),r=128+(t&gt;&gt;6&amp;63),o=128+(63&amp;t),[e,r,o])}function o(t){for(var e=[],o=0;o&lt;t.length;o++)for(var i=t.charCodeAt(o),n=r(i),s=0;s&lt;n.length;s++)e.push(n[s]);return e}function i(t,e){this.typeNumber=-1,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.rsBlocks=null,this.totalDataCount=-1,this.data=t,this.utf8bytes=o(t),this.make()}function n(t,e){if(void 0==t.length)throw new Error(t.length+&quot;/&quot;+e);for(var r=0;r&lt;t.length&amp;&amp;0==t[r];)r++;this.num=new Array(t.length-r+e);for(var o=0;o&lt;t.length-r;o++)this.num[o]=t[o+r]}function s(){this.buffer=new Array,this.length=0}i.prototype={constructor:i,getModuleCount:function(){return this.moduleCount},make:function(){this.getRightType(),this.dataCache=this.createData(),this.createQrcode()},makeImpl:function(t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var e=0;e&lt;this.moduleCount;e++)this.modules[e]=new Array(this.moduleCount);this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(!0,t),this.typeNumber&gt;=7&amp;&amp;this.setupTypeNumber(!0),this.mapData(this.dataCache,t)},setupPositionProbePattern:function(t,e){for(var r=-1;7&gt;=r;r++)if(!(-1&gt;=t+r||this.moduleCount&lt;=t+r))for(var o=-1;7&gt;=o;o++)-1&gt;=e+o||this.moduleCount&lt;=e+o||(r&gt;=0&amp;&amp;6&gt;=r&amp;&amp;(0==o||6==o)||o&gt;=0&amp;&amp;6&gt;=o&amp;&amp;(0==r||6==r)||r&gt;=2&amp;&amp;4&gt;=r&amp;&amp;o&gt;=2&amp;&amp;4&gt;=o?this.modules[t+r][e+o]=!0:this.modules[t+r][e+o]=!1)},createQrcode:function(){for(var t=0,e=0,r=null,o=0;8&gt;o;o++){this.makeImpl(o);var i=l.getLostPoint(this);(0==o||t&gt;i)&amp;&amp;(t=i,e=o,r=this.modules)}this.modules=r,this.setupTypeInfo(!1,e),this.typeNumber&gt;=7&amp;&amp;this.setupTypeNumber(!1)},setupTimingPattern:function(){for(var t=8;t&lt;this.moduleCount-8;t++)null==this.modules[t][6]&amp;&amp;(this.modules[t][6]=t%2==0,null==this.modules[6][t]&amp;&amp;(this.modules[6][t]=t%2==0))},setupPositionAdjustPattern:function(){for(var t=l.getPatternPosition(this.typeNumber),e=0;e&lt;t.length;e++)for(var r=0;r&lt;t.length;r++){var o=t[e],i=t[r];if(null==this.modules[o][i])for(var n=-2;2&gt;=n;n++)for(var s=-2;2&gt;=s;s++)-2==n||2==n||-2==s||2==s||0==n&amp;&amp;0==s?this.modules[o+n][i+s]=!0:this.modules[o+n][i+s]=!1}},setupTypeNumber:function(t){for(var e=l.getBCHTypeNumber(this.typeNumber),r=0;18&gt;r;r++){var o=!t&amp;&amp;1==(e&gt;&gt;r&amp;1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=o,this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=o}},setupTypeInfo:function(t,e){for(var r=u[this.errorCorrectLevel]&lt;&lt;3|e,o=l.getBCHTypeInfo(r),i=0;15&gt;i;i++){var n=!t&amp;&amp;1==(o&gt;&gt;i&amp;1);6&gt;i?this.modules[i][8]=n:8&gt;i?this.modules[i+1][8]=n:this.modules[this.moduleCount-15+i][8]=n;var n=!t&amp;&amp;1==(o&gt;&gt;i&amp;1);8&gt;i?this.modules[8][this.moduleCount-i-1]=n:9&gt;i?this.modules[8][15-i-1+1]=n:this.modules[8][15-i-1]=n}this.modules[this.moduleCount-8][8]=!t},createData:function(){var t=new s,e=this.typeNumber&gt;9?16:8;t.put(4,4),t.put(this.utf8bytes.length,e);for(var r=0,o=this.utf8bytes.length;o&gt;r;r++)t.put(this.utf8bytes[r],8);for(t.length+4&lt;=8*this.totalDataCount&amp;&amp;t.put(0,4);t.length%8!=0;)t.putBit(!1);for(;;){if(t.length&gt;=8*this.totalDataCount)break;if(t.put(i.PAD0,8),t.length&gt;=8*this.totalDataCount)break;t.put(i.PAD1,8)}return this.createBytes(t)},createBytes:function(t){for(var e=0,r=0,o=0,i=this.rsBlock.length/3,s=new Array,u=0;i&gt;u;u++)for(var a=this.rsBlock[3*u+0],h=this.rsBlock[3*u+1],g=this.rsBlock[3*u+2],c=0;a&gt;c;c++)s.push([g,h]);for(var f=new Array(s.length),d=new Array(s.length),m=0;m&lt;s.length;m++){var p=s[m][0],v=s[m][1]-p;r=Math.max(r,p),o=Math.max(o,v),f[m]=new Array(p);for(var u=0;u&lt;f[m].length;u++)f[m][u]=255&amp;t.buffer[u+e];e+=p;var b=l.getErrorCorrectPolynomial(v),w=new n(f[m],b.getLength()-1),A=w.mod(b);d[m]=new Array(b.getLength()-1);for(var u=0;u&lt;d[m].length;u++){var T=u+A.getLength()-d[m].length;d[m][u]=T&gt;=0?A.get(T):0}}for(var P=new Array(this.totalDataCount),y=0,u=0;r&gt;u;u++)for(var m=0;m&lt;s.length;m++)u&lt;f[m].length&amp;&amp;(P[y++]=f[m][u]);for(var u=0;o&gt;u;u++)for(var m=0;m&lt;s.length;m++)u&lt;d[m].length&amp;&amp;(P[y++]=d[m][u]);return P},mapData:function(t,e){for(var r=-1,o=this.moduleCount-1,i=7,n=0,s=this.moduleCount-1;s&gt;0;s-=2)for(6==s&amp;&amp;s--;;){for(var u=0;2&gt;u;u++)if(null==this.modules[o][s-u]){var a=!1;n&lt;t.length&amp;&amp;(a=1==(t[n]&gt;&gt;&gt;i&amp;1));var h=l.getMask(e,o,s-u);h&amp;&amp;(a=!a),this.modules[o][s-u]=a,i--,-1==i&amp;&amp;(n++,i=7)}if(o+=r,0&gt;o||this.moduleCount&lt;=o){o-=r,r=-r;break}}}},i.PAD0=236,i.PAD1=17;for(var u=[1,0,3,2],a={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},l={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t&lt;&lt;10;l.getBCHDigit(e)-l.getBCHDigit(l.G15)&gt;=0;)e^=l.G15&lt;&lt;l.getBCHDigit(e)-l.getBCHDigit(l.G15);return(t&lt;&lt;10|e)^l.G15_MASK},getBCHTypeNumber:function(t){for(var e=t&lt;&lt;12;l.getBCHDigit(e)-l.getBCHDigit(l.G18)&gt;=0;)e^=l.G18&lt;&lt;l.getBCHDigit(e)-l.getBCHDigit(l.G18);return t&lt;&lt;12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t&gt;&gt;&gt;=1;return e},getPatternPosition:function(t){return l.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case a.PATTERN000:return(e+r)%2==0;case a.PATTERN001:return e%2==0;case a.PATTERN010:return r%3==0;case a.PATTERN011:return(e+r)%3==0;case a.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case a.PATTERN101:return e*r%2+e*r%3==0;case a.PATTERN110:return(e*r%2+e*r%3)%2==0;case a.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error(&quot;bad maskPattern:&quot;+t)}},getErrorCorrectPolynomial:function(t){for(var e=new n([1],0),r=0;t&gt;r;r++)e=e.multiply(new n([1,h.gexp(r)],0));return e},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,o=0,i=0;e&gt;i;i++)for(var n=0,s=t.modules[i][0],u=0;e&gt;u;u++){var a=t.modules[i][u];if(e-6&gt;u&amp;&amp;a&amp;&amp;!t.modules[i][u+1]&amp;&amp;t.modules[i][u+2]&amp;&amp;t.modules[i][u+3]&amp;&amp;t.modules[i][u+4]&amp;&amp;!t.modules[i][u+5]&amp;&amp;t.modules[i][u+6]&amp;&amp;(e-10&gt;u?t.modules[i][u+7]&amp;&amp;t.modules[i][u+8]&amp;&amp;t.modules[i][u+9]&amp;&amp;t.modules[i][u+10]&amp;&amp;(r+=40):u&gt;3&amp;&amp;t.modules[i][u-1]&amp;&amp;t.modules[i][u-2]&amp;&amp;t.modules[i][u-3]&amp;&amp;t.modules[i][u-4]&amp;&amp;(r+=40)),e-1&gt;i&amp;&amp;e-1&gt;u){var l=0;a&amp;&amp;l++,t.modules[i+1][u]&amp;&amp;l++,t.modules[i][u+1]&amp;&amp;l++,t.modules[i+1][u+1]&amp;&amp;l++,(0==l||4==l)&amp;&amp;(r+=3)}s^a?n++:(s=a,n&gt;=5&amp;&amp;(r+=3+n-5),n=1),a&amp;&amp;o++}for(var u=0;e&gt;u;u++)for(var n=0,s=t.modules[0][u],i=0;e&gt;i;i++){var a=t.modules[i][u];e-6&gt;i&amp;&amp;a&amp;&amp;!t.modules[i+1][u]&amp;&amp;t.modules[i+2][u]&amp;&amp;t.modules[i+3][u]&amp;&amp;t.modules[i+4][u]&amp;&amp;!t.modules[i+5][u]&amp;&amp;t.modules[i+6][u]&amp;&amp;(e-10&gt;i?t.modules[i+7][u]&amp;&amp;t.modules[i+8][u]&amp;&amp;t.modules[i+9][u]&amp;&amp;t.modules[i+10][u]&amp;&amp;(r+=40):i&gt;3&amp;&amp;t.modules[i-1][u]&amp;&amp;t.modules[i-2][u]&amp;&amp;t.modules[i-3][u]&amp;&amp;t.modules[i-4][u]&amp;&amp;(r+=40)),s^a?n++:(s=a,n&gt;=5&amp;&amp;(r+=3+n-5),n=1)}var h=Math.abs(100*o/e/e-50)/5;return r+=10*h}},h={glog:function(t){if(1&gt;t)throw new Error(&quot;glog(&quot;+t+&quot;)&quot;);return h.LOG_TABLE[t]},gexp:function(t){for(;0&gt;t;)t+=255;for(;t&gt;=256;)t-=255;return h.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},g=0;8&gt;g;g++)h.EXP_TABLE[g]=1&lt;&lt;g;for(var g=8;256&gt;g;g++)h.EXP_TABLE[g]=h.EXP_TABLE[g-4]^h.EXP_TABLE[g-5]^h.EXP_TABLE[g-6]^h.EXP_TABLE[g-8];for(var g=0;255&gt;g;g++)h.LOG_TABLE[h.EXP_TABLE[g]]=g;n.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r&lt;this.getLength();r++)for(var o=0;o&lt;t.getLength();o++)e[r+o]^=h.gexp(h.glog(this.get(r))+h.glog(t.get(o)));return new n(e,0)},mod:function(t){var e=this.getLength(),r=t.getLength();if(0&gt;e-r)return this;for(var o=new Array(e),i=0;e&gt;i;i++)o[i]=this.get(i);for(;o.length&gt;=r;){for(var s=h.glog(o[0])-h.glog(t.get(0)),i=0;i&lt;t.getLength();i++)o[i]^=h.gexp(h.glog(t.get(i))+s);for(;0==o[0];)o.shift()}return new n(o,0)}};var c=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];i.prototype.getRightType=function(){for(var t=1;41&gt;t;t++){var e=c[4*(t-1)+this.errorCorrectLevel];if(void 0==e)throw new Error(&quot;bad rs block @ typeNumber:&quot;+t+&quot;/errorCorrectLevel:&quot;+this.errorCorrectLevel);for(var r=e.length/3,o=0,i=0;r&gt;i;i++){var n=e[3*i+0],s=e[3*i+2];o+=s*n}var u=t&gt;9?2:1;if(this.utf8bytes.length+u&lt;o||40==t){this.typeNumber=t,this.rsBlock=e,this.totalDataCount=o;break}}},s.prototype={get:function(t){var e=Math.floor(t/8);return this.buffer[e]&gt;&gt;&gt;7-t%8&amp;1},put:function(t,e){for(var r=0;e&gt;r;r++)this.putBit(t&gt;&gt;&gt;e-r-1&amp;1)},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length&lt;=e&amp;&amp;this.buffer.push(0),t&amp;&amp;(this.buffer[e]|=128&gt;&gt;&gt;this.length%8),this.length++}},t.exports=i},function(t,e){t.exports=function(t){for(var e,r=Array.prototype.slice.call(arguments,1),o=0;e=r[o];o++)if(e)for(var i in e)t[i]=e[i];return t}}]);</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="hidden">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.09322s from github-fe140-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-FJ2TOMJmUXKHCCXHj6SP3MpNQx0GfL9f2nEg2eOcxzg=" src="https://assets-cdn.github.com/assets/frameworks-149d9338c2665172870825c78fa48fdcca4d431d067cbf5fda7120d9e39cc738.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-EJ2vSkBO5DsxbJTLsCXdXDkJkOrMOx2AfsbhFQA5rwI=" src="https://assets-cdn.github.com/assets/github-109daf4a404ee43b316c94cbb025dd5c390990eacc3b1d807ec6e1150039af02.js"></script>
      
      
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
    </button>
  </div>
</div>

  </body>
</html>

