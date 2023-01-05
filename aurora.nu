fetch "https://www.spaceweather.gc.ca/forecast-prevision/short-court/sfst-7-en.php?obs=SUB" | htmlq '#SUB' -t | to text | lines | str trim -a | skip 10 | window 3 --stride 5 | each {|g| {date:$g.0 hour:$g.1 nT:($g.2 | into int )}} | insert classification {|el| if $el.nT < 27 {"quiet"} else if $el.nT < 51 { "unsettled" } else if $el.nT < 90 {"active"} else if $el.nT < 304 {"stormy"} else {"major"}  }
