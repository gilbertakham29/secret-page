<template>
    <div class="w-11/12 mx-auto">
        <div class="mb-10">
            <h2 class="md:text-4xl text-2xl font-bold mb-5">PAST / CONTINUING STAGE</h2>
            <div class="overflow-x-auto" >
               <TableInput/>
            </div>
        </div>
    </div>




    <div class="w-11/12 mx-auto">
        <div class="mb-10">
            <h2 class="md:text-4xl text-2xl font-bold mb-5">PRESENT / CONTINUING STAGE</h2>
            <div class="overflow-x-auto">
                <TableInput/>
            </div>
        </div>
    </div>
    <div class="w-11/12 mx-auto">
        <div class="mb-10">
            <h2 class="md:text-4xl text-2xl font-bold mb-5">FUTURE / CONTINUING STAGE</h2>
            <div class="overflow-x-auto">
               <TableInput/>
            </div>
        </div>
    </div>
    <div class="flex justify-center mb-2 items-center">
        <button disabled class="px-5 py-2 text-xl font-bold bg-gray-500 rounded-md">Submit</button>
    </div>
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

<style scoped>

</style>