<script>
        document.getElementById('jobForm').addEventListener('submit', function(event) {
            var today = new Date().toISOString().split('T')[0];
            var title = document.getElementById('title').value;
            var type = document.getElementById('type').value;
            var department = document.getElementById('department').value;
            var country = document.getElementById('country').value;
            var description = document.getElementById('description').value;
            var openingDate = document.getElementById('openingDate').value;

            if (!title || !type || !department || !country || !description || !openingDate) {
                alert('All fields are required!');
                event.preventDefault();
                return;
            }

            if (new Date(openingDate) > new Date(today)) {
                alert('Opening date cannot be greater than today\'s date!');
                event.preventDefault();
            }
        });
    </script>
