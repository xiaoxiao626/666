  document.getElementById("myForm").addEventListener("submit", function(event) {
            event.preventDefault(); // 防止表單提交後刷新頁面

            // 取得輸入框的值
            let h = document.getElementById("high").value;
			 let w = document.getElementById("weight").value;
			 let hh = h**2;
			let bmi = w / (h ** 2);
           bmi = bmi.toFixed(2);
          if (bmi >= 27) {
			   let a = "大肥宅" 
		  } else if (bmi > 24) {
			 a = "中肥宅" 
		  }
			else if (bmi > 18.5 ){
				 a = "噁男" 
		  }		 
		  else {
			  a = "骨頭" 
		  }
		  
          

            // 顯示結果
            document.getElementById("result").textContent = "你的bmi是" + bmi + "！";
			  document.getElementById("result1").textContent = "你的身高是" + h*100 + "公分！";
			    document.getElementById("result11").textContent = "你的體重是" + w + "公斤！";
				 document.getElementById("result111").textContent = a;
			document.getElementById("myForm").reset();
        });