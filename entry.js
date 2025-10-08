const supabaseUrl = 'https://hdtbveombnhozbxognvr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkdGJ2ZW9tYm5ob3pieG9nbnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkyMjc4NDMsImV4cCI6MjA3NDgwMzg0M30.J1gETcvnnd47IyumvjzNGLMADQjQdcsnbr6SQOGSpsM';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function saveEntry() {
  const { data, error } = await supabase
    .from('entries')
    .insert([
      {
        date: document.getElementById('date').value,
        type: document.getElementById('type').value,
        account: document.getElementById('account').value,
        amount: parseFloat(document.getElementById('amount').value),
        description: document.getElementById('description').value
      }
    ]);
  if (error) console.error(error);
  else alert('Saved!');
}

document.getElementById('entryForm').addEventListener('submit', function(e) {
  e.preventDefault();
  saveEntry();
});