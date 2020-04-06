
const showCardSection=(myData)=>{
         var myEle= myData.map((card)=>{
             return(`<div class="col-lg-3 d-flex flex-column col-md-4 col-6 p-2">
                  <div class="image-container">
                    <img src="${card.image}"  alt="${card.name}">
                    <div class="basic-container text-white p-3">
                        <h5 class="mb-2">${card.name}</h5>
                        <span>Id: ${card.id}</span>
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
    export default showCardSection;