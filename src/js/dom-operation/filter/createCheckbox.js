
    const displayCheckbox=(checkboxData)=>{
        var checkBoxhtml="";
        for (let index = 0; index < checkboxData.length; index++) {
            const myId=checkboxData[index].name + '-' + index;
           // console.log('checkboxData : ' ,myId); 
            const element = checkboxData[index];
            checkBoxhtml +=`<section class="filterTypes p-3 my-3 border border-dark">
            <h4 class="mb-3">${element.name}</h4>`
        var tempHtml= element.filters.map( (checkData,idx)=>{
            return(
                ` <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="${checkboxData[index].name}-${idx}" name="${element.name}" value="${checkData.value}">
                    <label class="form-check-label" for="${checkboxData[index].name}-${idx}">${checkData.name}</label>
                    </div>`
            )
        });
        checkBoxhtml +=tempHtml.join("")+"</section>"
        }
        return checkBoxhtml;
    }


    
export {displayCheckbox}