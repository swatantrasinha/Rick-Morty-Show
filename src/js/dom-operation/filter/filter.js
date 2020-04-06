
export default  class ShowFilterPage {

    clearAllWidgets(){
        var mainDiv = document.getElementById("myWidget");
    }

 createHTMLElement(html) {
        const template = document.createElement('template');
        template.innerHTML = html;
        return template.content.firstElementChild;
      }


     showFilterSection(){
        const filterSection = this.createHTMLElement(`
      <div class="d-flex flex-column">

        <div class="species filterTypes container p-3 my-3 border-1">
            <h2>Species</h2>
     
            <div class="form-check">
                <label class="form-check-label" for="Human">
                  <input type="checkbox" class="form-check-input" id="check1" name="option1" value="human">Human
                </label>
          </div>
     
            <div class="form-check">
                  <label class="form-check-label" for="x">
                    <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something">Mythology
                  </label>
                </div>

            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" id="check3" name="option3" value="otherSpecies">Other Species
              </label>
            </div>
        
        </div>
        
        
        
        <div class="gender filterTypes container p-3 my-3 bg-dark text-white">
        <h2>Gender</h2>
            <div class="form-check">
                  <label class="form-check-label" for="Male">
                    <input type="checkbox" class="form-check-input" id="male" name="male" value="male">Male
                  </label>
            </div>

              <div class="form-check">
                <label class="form-check-label" for="Female">
                  <input type="checkbox" class="form-check-input" id="female" name="female" value="female">Female
                </label>
              </div>     
        </div>
        
       
        <div class="origin filterTypes container p-3 my-3 bg-dark text-white">
                <h2>Origin</h2>
                    <div class="form-check">
                        <label class="form-check-label" for="unknown">
                          <input type="checkbox" class="form-check-input" id="unknown" name="unknown" value="unknown">Unknown
                        </label>
                    </div>

                    <div class="form-check">
                    <label class="form-check-label" for="post-apocalyptic-earth">
                      <input type="checkbox" class="form-check-input" id="post-apocalyptic-earth" name="post-apocalyptic-earth" value="post-apocalyptic-earth">Post-Apocalyptic Earth
                    </label>
                </div>

                <div class="form-check">
                <label class="form-check-label" for="nuptia-4">
                  <input type="checkbox" class="form-check-input" id="nuptia-4" name="nuptia-4" value="nuptia-4">Nuptia-4
                </label>
            </div>

                <div class="form-check">
                <label class="form-check-label" for="other-origins">
                  <input type="checkbox" class="form-check-input" id="other-origins" name="other-origins" value="other-origins">Other Origins
                </label>
            </div>


        </div>

    </div>
        `);  
        
        return filterSection;
    }

    }