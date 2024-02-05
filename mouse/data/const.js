const jsScriptContent = `
const buttonsHtml = \`
<div class="btns_c">
    <button class="button btn_l btn_style" onclick="move('left')">
        <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M320 0H192V128H128V256H64V384H0V512H128V384H192V256H256H320V384H384V512H512V384H448V256H384V128H320V0Z" fill="white"/>
        </svg>
    </button>
    <button class="button btn_t btn_style" onclick="move('up')">
        <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M320 0H192V128H128V256H64V384H0V512H128V384H192V256H256H320V384H384V512H512V384H448V256H384V128H320V0Z" fill="white"/>
        </svg>
    </button>
    <button class="button btn_r btn_style" onclick="move('right')">
        <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M320 0H192V128H128V256H64V384H0V512H128V384H192V256H256H320V384H384V512H512V384H448V256H384V128H320V0Z" fill="white"/>
        </svg>
    </button>
    <button class="button btn_b btn_style" onclick="move('down')">
        <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M320 0H192V128H128V256H64V384H0V512H128V384H192V256H256H320V384H384V512H512V384H448V256H384V128H320V0Z" fill="white"/>
        </svg>
    </button>
</div>
\`;
`;
