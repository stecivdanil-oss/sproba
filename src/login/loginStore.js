import { defineStore } from "pinia"
export const useLoginStore = defineStore('login', {
    state: ()=>({
        user:JSON.parse(localStorage.getItem('adminko')) || null, 
        error: null,
        load:false
    }),
    actions:{
         async login(login, password){
            this.load = true
            this.error = null
            try{
            const res = await fetch('/admin.json')
            if (!res.ok){
                throw new Error('помилка даних') 
            }
            let data = await res.json()
            let user = data.find(el=>el.user === login && el.password === password)
            if (!user){
              this.error = "error"
              return false
            }
            this.user = {
                name:user.user,
                role:user.role
            }
            localStorage.setItem('adminko', JSON.stringify(this.user))
            return true
            }
          catch {
            this.error= "помилка 1даних"
          }
          finally{
            this.load = false
          }
         } ,
        logout (){
            this.user = null
            localStorage.removeItem('adminko')
        }
    }
})
