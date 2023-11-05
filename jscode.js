document.addEventListener("DOMContentLoaded", function () {

    function updateTime(id1, id2, timeZone) {
        setInterval(() => {
            const now = new Date();
            const options1 = {
                timeZone: timeZone, hour: "2-digit", minute: "2-digit", second: "2-digit",
            };
            const options2 = {
                timeZone: timeZone, weekday: "long", month: "long", day: "2-digit", year: "numeric",
            };
            const formattedTime = now.toLocaleString("en-US", options1);
            $("#" + id1).text(formattedTime);

            const formattedDate = now.toLocaleString("en-US", options2);
            $("#" + id2).text(formattedDate);

        }, 1000)
    }
    updateTime("indiatime", "indiadate", "Asia/Kolkata");
    updateTime("chinatime", "chinadate", "Asia/Shanghai");
    updateTime("japantime", "japandate", "Asia/Tokyo");
    updateTime("southkoreatime", "southkoreadate", "Asia/Seoul");
    updateTime("northkoreatime", "northkoreadate", "Asia/Pyongyang");
    updateTime("mongoliatime", "mongoliadate", "Asia/Ulaanbaatar");
    updateTime("taiwantime", "taiwandate", "Asia/Taipei");
    updateTime("hongkongtime", "hongkongdate", "Asia/Hong_Kong");
    updateTime("macautime", "macaudate", "Asia/Macau");
    updateTime("turkeytime", "turkeydate", "Asia/Istanbul");
    updateTime("irantime", "irandate", "Asia/Tehran");
    updateTime("iraqtime", "iraqdate", "Asia/Baghdad");
    updateTime("syriatime", "syriadate", "Asia/Damascus");
    updateTime("lebanontime", "lebanondate", "Asia/Beirut");
    updateTime("jordantime", "jordandate", "Asia/Amman");
    updateTime("israeltime", "israeldate", "Asia/Jerusalem");
    updateTime("palestinetime", "palestinedate", "Asia/Gaza");
    updateTime("sauditime", "saudidate", "Asia/Riyadh");
    updateTime("yementime", "yemendate", "Asia/Aden");
    updateTime("omantime", "omandate", "Asia/Muscat");
    updateTime("uaetime", "uaedate", "Asia/Dubai");
    updateTime("qatartime", "qatardate", "Asia/Qatar");
    updateTime("bahraintime", "bahraindate", "Asia/Bahrain");
    updateTime("kuwaittime", "kuwaitdate", "Asia/Kuwait");
    updateTime("kazakhstantime", "kazakhstandate", "Asia/Almaty");
    updateTime("uzbekistantime", "uzbekistandate", "Asia/Samarkand");
    updateTime("tajikistantime", "tajikistandate", "Asia/Dushanbe");
    updateTime("kyrgyzstantime", "kyrgyzstandate", "Asia/Bishkek");
    updateTime("turkmenistantime", "turkmenistandate", "Asia/Ashgabat");
    updateTime("thailandtime", "thailanddate", "Asia/Bangkok");
    updateTime("vietnamtime", "vietnamdate", "Asia/Ho_Chi_Minh");
    updateTime("cambodiatime", "cambodiadate", "Asia/Phnom_penh");
    updateTime("laostime", "laosdate", "Asia/Vientiane");
    updateTime("myanmartime", "myanmardate", "Asia/Yangon");
    updateTime("malaysiatime", "malaysiadate", "Asia/Kuala_Lumpur");
    updateTime("singaporetime", "singaporedate", "Asia/Singapore");
    updateTime("bruneitime", "bruneidate", "Asia/Brunei");
    updateTime("indonesiatime", "indonesiadate", "Asia/Jakarta");
    updateTime("timortime", "timordate", "Asia/Dili");
    updateTime("philippinestime", "philippinesdate", "Asia/Manila");
    updateTime("pakistantime", "pakistandate", "Asia/Karachi");
    updateTime("nepaltime", "nepaldate", "Asia/Kathmandu");
    updateTime("srilankatime", "srilankadate", "Asia/Colombo");
    updateTime("bangladeshtime", "bangladeshdate", "Asia/Dhaka");
    updateTime("bhutantime", "bhutandate", "Asia/Thimphu");
    updateTime("maldivestime", "maldivesdate", "Indian/Maldives");


    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-bs-target');
            const collapses = document.querySelectorAll('.collapse-vertical');

            collapses.forEach(collapse => {
                if (collapse.id === target) {
                    $(target).collapse('toggle');
                } else {
                    $(collapse).collapse('hide');
                }
            });
        })
    })
});

