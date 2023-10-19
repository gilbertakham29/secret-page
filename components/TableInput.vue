<template>
     <form  v-on:submit.prevent="onSubmit" >
                    <table class="w-full text-sm text-left text-gray-500"  v-if="tableShow">
                        <thead class="text-xs text-gray-700 bg-gray-50">
                            <tr>
                                <th scope="col" class="px-4 py-3">Work to be done</th>
                                <th scope="col" class="px-4 py-3">Primary Stakeholder</th>
                                <th scope="col" class="px-4 py-3">Outcome</th>
                                <th scope="col" class="px-4 py-3">Skills Required</th>
                                <th scope="col" class="px-4 py-3">Work Quality</th>
                                <th scope="col" class="px-4 py-3">Capibility</th>
                                <th scope="col" class="px-4 py-3">Interest</th>
                                <th scope="col" class="px-4 py-3">Comment</th>
                                <th scope="col" class="px-4 py-3">Action</th>
                            </tr>
                        </thead>
                      
                       
                          
                      
                        <tbody v-for="(item,index) in dataList" >
                          <tr v-if="item.editing" :key="index">
                            <td :key="index" scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">
                                  {{ item.value1 }}
                              </td>
                              <td :key="index" class="px-4 py-3">{{item.value2 }}</td>
                              <td :key="index" class="px-4 py-3">{{ item.value3}}</td>
                              <td :key="index"  class="px-4 py-3">{{item.value4}}</td>
                              <td :key="index"  class="px-4 py-3">{{ item.value5}}</td>
                              <td :key="index"  class="px-4 py-3">{{ item.value6}}</td>
                              <td :key="index"  class="px-4 py-3">{{ item.value7}}</td>
                              <td :key="index"  class="px-4 py-3">{{ item.value8 }}</td>

                              <td v-if="item.editing" class="text-center" >
                                  <div class="flex items-center justify-center" >
                                      <button class="py-3 text-blue-600" type="button"  @click="editItem(index)">
                                          <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
  <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"/>
  <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"/>
</svg>
                                      </button>
                                      <button class="py-3 text-red-600" type="button" @click="deletOption(index)">
                                          <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
  <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z"/>
</svg>
                                      </button>
                                  </div>
                              </td>
                          </tr>
                          
                          <tr v-if="!item.editing" :key="index">
                              
                              
                              <td :key="index">
                                   <select  name="service"  v-model="item.value1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                       <option hidden disabled></option>
                                       <option value="Service1">Service1</option>
                                       <option value="Service2">Service2</option>
                                       <option value="Service3">Service3</option>
                                   </select>
                               </td>
                               
                              <td :key="index">
<select name="customer" v-model="item.value2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
    <option hidden disabled></option>
    <option value="My Manager">My Manager</option>
    <option value="My Team">My Team</option>
    <option value="My Self">My Self</option>
    <option value="Leadaer">Leader</option>
    <option value="Executive Staff">Executive Staff</option>
    <option value="Functional Group">Functional Group</option>
</select>
</td>

                              <td :key="index">
<select name="impact" v-model="item.value3" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
    <option hidden disabled></option>
    <option value="Revenue Gen">Revenue Gen</option>
    <option value="Profitability">Profitability</option>
    <option value="Revenue Gen">Revenue Gen</option>
    <option value="Revenue Gen">Revenue Gen</option>
</select>
</td>


                              <td :key="index">
<select name="skill" v-model="item.value4" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
    <option hidden disabled></option>
    <option value="Core">Core</option>
    <option value="Skilled">Skilled</option>
    <option value="Expert">Expert</option>
</select>
</td>

                              <td :key="index">

                                    <select name="sq" v-model="item.value5" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        <option hidden disabled></option>
                                        <option value="The service is working well">The service is working well</option>
                                        <option value="The service need improving">The service need improving</option>
                                        <option value="Environmental/Team dynamics impacting service Effectiveness">Environmenetal/Team dynamics impacting service Effectiveness</option>
                                        <option value="Improvment is in process">Improvement is in process</option>
                                        <option value="I want to lead improving this service">I want to lead improving this service</option>
                                        <option value="This service could be automated/outsourced">This service could be automated/outsourced</option>
                                        <option value="Service not needed/Not Adding value">

                                        </option>
                                    </select>
                                </td>

                              <td :key="index">
                                    <select name="mc" v-model="item.value6" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        <option hidden disabled></option>
                                        <option value="I am fully capable and confident">I am fully capable and confident</option>
                                        <option value="This service offers me an opportunity to grow">This service offers me an opportunity to grow</option>
                                        <option value="This is a stretch for me; need additional support">This is a stretch for me; need additional support</option>
                                        <option value="My talent is NOT aligned with this service">My talent is NOT aligned with this service</option>
                                        <option value="There is another person I know is better suited">There is another person I know is better suited</option>
                                    </select>
                                </td>

                              <td :key="index">
                                    <select name="mi" v-model="item.value7" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        <option hidden disabled></option>
                                        <option value="Enjoy this service; would like to keep doing it">Enjoy this service; would like to keep doing it</option>
                                        <option value="Dislike this service; would prefer not to do it">Dislike this service; would prefer not to do it</option>
                                        <option value="Been there done that; I am not learning or growing">Been there done that; I am not learning or growing</option>
                                        <option value="Would like to train/Mentor others to do this service">Would like to train/Mentor others to do this service</option>
                                        <option value="Specific project that is completed/no longer needed">Specific project that is completed/no longer needed</option>
                                        <option value="Not doing this, but would llke to in the future">Not doing this, but would like to in the future</option>
                                    </select>
                                </td>

                              <td :key="index">
                                    <input type="text" v-model="item.value8" placeholder="comment..." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="comment">
                                </td>


                                <td class="text-center" v-if="!item.editing">
                                    <div class="flex justify-center items-center">
                                        <button type="submit" @click="saveItem(index)" >
                                            <svg class="w-6 h-6 text-green-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
  </svg>
                                        </button>
                                       
                                        <button type="submit">
                                            <svg class="w-6 h-6 text-red-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 7-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  </svg>
                                        </button>
                                    </div>
                                </td>
                               
                              
                          </tr>
                                </tbody>  
                                
                       
         
                        </table>
                       </form>
                            
                       
                <form class="flex justify-center mt-5"  v-on:submit.prevent="onSubmit">
                    
                    <button  @click="btnName ? addNewTable() : createTable()" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        <span>{{ btnName ? 'Add Row' : 'Create New Table' }}</span>
                    </button>
                    
                </form>
      
</template>

<script>


export default{
    data(){
        return{
        
      
        dataList:[
        { value1: "", value2: "",value3: "",value4:"",value5:"",value6:"",value7:"",value8:"", editing: false },
        ],
        
       
        tableShow:false,
        btnName:false,
        
        }
        
    },
    methods:{
        createTable(){
     this.tableShow = true
     this.btnName=true
    },
    addNewTable(){
       
   
 if(this.dataList[0].value1 || this.dataList[0].value2 || this.dataList[0].value3 || this.dataList[0].value4 || this.dataList[0].value5 || this.dataList[0].value6 || this.dataList[0].value7 || this.dataList[0].value8){
                this.dataList.push({...this.selectedOption})
                this.dataList[1].value1 =null
                this.dataList[2].value2  =null
                this.dataList[3].value3  =null
                this.dataList[4].value4  =null
                this.dataList[5].value5 =null
                this.dataList[6].value6  =null
                this.dataList[7].value7 =null
                this.dataList[8].value8  =null
                
               

            }

    },
      

      
        editItem(index) {
        this.dataList[index].editing = false;
      },
      saveItem(index) {
        this.dataList[index].editing = true;
      },
    
        deletOption(index){
            this.dataList.splice(index,1)
        }
       
    }
}
</script>

<style lang="scss" scoped>

</style>