
    if (typeof corporateDataArray !== 'undefined' && corporateDataArray.length > 0) {
        const PRODUCT_NAME = corporateDataArray[0].name;
        console.log(PRODUCT_NAME);  
        document.getElementById('corporation_name').textContent = PRODUCT_NAME;
          const currentYear = new Date().getFullYear();
      const variations = [
        `© ${currentYear} <a href="your_link_here">${PRODUCT_NAME}</a> All rights reserved.`,
        `All content is © ${currentYear} by <a href="your_link_here">${PRODUCT_NAME}</a>`,
        `Copyright ${currentYear} <a href="your_link_here">${PRODUCT_NAME}</a> Protected and reserved.`,
        `${currentYear} © <a href="your_link_here">${PRODUCT_NAME}</a> Rights reserved globally.`,
        `Exclusive rights ${currentYear} © <a href="your_link_here">${PRODUCT_NAME}</a>`
      ];
  const randomVariation = variations[Math.floor(Math.random() * variations.length)];
  document.getElementById('copyright').innerHTML = `${randomVariation}`;
    } else {
        console.error('corporateDataArray undefined or empty');
    }

document.getElementById("content").style.display = "block";
    