<!-- Adiciona o SDK do Firebase -->
<script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js"></script>

<script>
  // Configurações do Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyB59DZxJO1BiIhAcFO_IOrvmtFKx228Q2Y",
    authDomain: "recebimento-extrema.firebaseapp.com",
    databaseURL: "https://recebimento-extrema-default-rtdb.firebaseio.com",
    projectId: "recebimento-extrema",
    storageBucket: "recebimento-extrema.appspot.com",
    messagingSenderId: "23948254628",
    appId: "1:23948254628:web:f41772db83c50f80323531"
  };

  // Inicializa o Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const database = firebase.database(app);
</script>
