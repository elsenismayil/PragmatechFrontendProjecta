let a = ['Abbas','veli','eli ']
for(i in a){
  for(j in a[i]){
      if(a[i][j]==a[i][j-1]){
          console.log(a[i])
      }
  }
}

