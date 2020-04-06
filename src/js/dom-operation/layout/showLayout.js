
import {displayCheckbox} from '../filter/createCheckbox';

const filterData=[
  /*  {
        name:"status",
        filters:[{name:"alive",value:"alive"},{name:"dead",value:"dead"},{name:"unknown",value:"unknown"}]
    },*/
    {
        name:"species",
        filters:[{name:"Human",value:"Human"},{name:"Alien",value:"alien"},{name:"Humanoid",value:"humanoid"},{name:"Cronenberg",value:"cronenberg"}]
    },
    {
        name:"gender",
        filters:[{name:"male",value:"male"},{name:"female",value:"female"}]
    },
     {
        name:"origin",
        filters:[{name:"other places..",value:"unknown"},{name:"post apocalyptic earth",value:"post apocalyptic earth"},{name:"nuptia 4",value:"nuptia 4"}]
    }
]

export default  class ShowLayoutPage {   
    createHTMLElement(html) {
        const template = document.createElement('template');
        template.innerHTML = html;
        return template.content.firstElementChild;
      }

     showLayoutSection(){
        const layout = this.createHTMLElement(`
      
        <div class="container-fluid">
        <div class="row mb-mobile">
                <div class="filter col-sm-3">
                        <div class="filterSlider mb-5 d-none">
                            <i class="fa fa-plus-circle pull-right"></i>
                            <i class="fa fa-minus-circle pull-right d-none"></i>
                        </div>
                        <div class="showFilterSection hideFilter">
                            ${displayCheckbox(filterData)}     
                        </div>         
                </div> 

            <div class="showFilter col-sm-9"> 
                        <h3 class="my-3">
                            Selected Filter
                        </h3>
                        <div class='selected-filter p-2' id='selected-filter'>
                            
                        </div>
                        
                        <div class="search-sort row justify-content-between align-items-center ">
                                    <div class="form-group col-lg-5 col-sm-12">
                                            <label for="main-search">Search By Name</label>
                                            <div class="d-flex">
                                                <input type="text" class="form-control col-lg-7" id="search-text"/>
                                                <button type="button" class="btn btn-light search">Search</button>
                                            </div>
                                    </div>

                                    <div class="sorting col-lg-3 col-sm-12">
                                        <select class="form-control" id="sort-dropdown">
                                            <option value="0">ASC</option>
                                            <option value="1">DESC</option>
                                        </select>
                                    </div>
                        </div>
                        
                        
                        <div id="loader-spinner" class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>

                        <div class="main-data row mt-5">
                                    
                        

                        </div>

                        <nav aria-label="Page navigation example mb-5">
                        <ul class="pagination justify-content-center mt-3">
                          <li class="page-item">
                            <a class="page-link prev" href="#" tabindex="-1">Previous</a>
                          </li>
                          
                          <li class="page-item">
                            <a class="page-link next" href="#">Next</a>
                          </li>
                        </ul>
                      </nav>


            </div>         
       
      </div>
        </div>
        `);  
        
        return layout;
    }

    }