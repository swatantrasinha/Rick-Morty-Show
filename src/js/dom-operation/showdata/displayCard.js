
const showCardSection=(myData)=>{
  
         var myEle= myData.map((card)=>{           
           const createdTime= showTime(card.created);
            //console.log('createdTime ==>> ' , createdTime);
             return(`<div class="col-lg-3 d-flex flex-column col-md-4 col-6 p-2">
                  <div class="image-container">
                    <img src="${card.image}"  alt="${card.name}">
                    <div class="basic-container text-white p-3">
                        <h5 class="mb-2">${card.name}</h5>
                        <span>Id: ${card.id}</span>
                        <span class="ml-1"><small>Created : ${createdTime}</small></span>
                    </div>
                  </div>
                  <div class="info-container h-100 bg-dark">
                        <div class="d-flex p-3 mt-3 align-item-center justify-content-between info-border">
                            <span class="text-uppercase text-grey">Status:</span>
                            <span class="text-capitalize text-orange">${card.status}</span>
                          </div>
                          <div class="d-flex p-3 align-item-center justify-content-between info-border">
                          <span class="text-uppercase text-grey">Species:</span>
                          <span class="text-capitalize text-orange">${card.species}</span>
                        </div>
                        <div class="d-flex p-3 align-item-center justify-content-between info-border">
                            <span class="text-uppercase text-grey">Gender:</span>
                            <span class="text-capitalize text-orange">${card.gender}</span>
                          </div>
                          <div class="d-flex p-3 align-item-center justify-content-between info-border">
                            <span class="text-uppercase text-grey">Origin:</span>
                            <span class="text-capitalize text-orange small">${card.origin.name}</span>
                          </div>
                          <div class="d-flex p-3 align-item-center justify-content-between info-border">
                          <span class="text-uppercase text-grey">Last Location:</span>
                          <span class="text-capitalize text-orange small">${card.location.name}</span>
                        </div>                        
                    </div>

                </div>`)
         })         
        return myEle.join("");
    }
/*
    const calculateCreateTime=function(idPassed){
    console.log('calculateCreateTime called');
    const returnValue= 'Note : ' + idPassed + ' was created yo years ago !!!';
    return returnValue;
    }
*/
    const calculateCreateTime = (dateString) => {
      const today = new Date();
      const birthDate = new Date(dateString),
       yearsLater = new Date((birthDate.getFullYear()+1)+"/"+(birthDate.getMonth()+1)+"/"+birthDate.getDate()),
       monthsLater = new Date((birthDate.getFullYear())+"/"+(birthDate.getMonth()+2)+"/"+birthDate.getDate()),
       daysLater = new Date((birthDate.getFullYear())+"/"+(birthDate.getMonth()+1)+"/"+(birthDate.getDate()+1)),
      years = Math.floor((today-birthDate)/(yearsLater-birthDate)),
      dateMonths  = (today-birthDate)%(yearsLater-birthDate),
      months = Math.floor(dateMonths / (monthsLater-birthDate)),
      dateDays = dateMonths % (monthsLater-birthDate),
      days = Math.floor(dateDays / (daysLater-birthDate));
      return {"years": years, "months": months, "days": days}
  };
 const showTime=(date)=>{
     const {years,months,days}=calculateCreateTime(date);
    // console.log(years,months,days);
     let retval=""
     if(years){
      retval=`${years} years ago`;
     }
     else if(months){
      retval=`${months} months ago`;
     }else{
      retval=`${days} days ago`;
     }
     return retval;
   } 
    export default showCardSection;