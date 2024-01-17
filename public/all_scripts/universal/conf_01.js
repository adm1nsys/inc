let c01 = {
    //accent_color1 (body)
    ac01: '#F9F9F9',
    ac01_d: '#070707',
    //accent_color2 (button backgrond)
    ac02: '#E2E2E2',
    ac02_d: '#1D1D1D',
    //accent_color3 (button border)
    ac03: '1px solid #BCBCBC',
    ac03_d: '1px solid #434343',
    //accent_color4 (text1)
    ac04: 'black',
    ac04_d: 'white',
    //accent_color5 (text2)
    ac05: '#5e5e5e',
    ac05_d: '#949494',
    //max width content
    ac06: "80rem",
    //lang
    lang: "en",
    //is new user
    new_user: true
};
// c01.ac02 = "new color";

// Function to create CSS class rules
function createClassStyles() {
    let styles = `
        body {
            background-color: ${c01.ac01};
            color: ${c01.ac04};
        }

        .ac02{
            background-color: ${c01.ac02};
        }

        .ac03{
            border: ${c01.ac03};
        }

        .ac05{
            color: ${c01.ac05};
        }

        .brend_container:hover {
              background-color: ${c01.ac02};
        }

        .ac06{
            max-width: ${c01.ac06};
        }

        .ac07{
            color: ${c01.ac04};
        }

        .lsc04{
            background-color: ${c01.ac01};
        }

        .lsc03{
            background-color: ${c01.ac01};
        }

        .lsc05{
            background-color: ${c01.ac02};
        }

        .lsc06{
            background-color: ${c01.ac04};
        }
        

@media (prefers-color-scheme: dark) {
            body {
            background-color: ${c01.ac01_d};
            color: ${c01.ac04_d};
        }

        .ac02{
            background-color: ${c01.ac02_d};
        }

        .ac03{
            border: ${c01.ac03_d};
        }

        .ac05{
            color: ${c01.ac05_d};
        }

        .ac07{
            color: ${c01.ac04_d};
        }
        
        .lsc04{
            background-color: ${c01.ac01_d};
        }

        .lsc03{
            background-color: ${c01.ac01_d};
        }

        .lsc05{
            background-color: ${c01.ac02_d};
        }

        .lsc06{
            background-color: ${c01.ac04_d};
        }
        
                .brend_container:hover {
  background-color: ${c01.ac02_d};
}
}
        
    `;

    let styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}
createClassStyles();