import http.server
import socketserver
from urllib.parse import parse_qs

PORT = 8000

class MyRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Serve the registration page when the user accesses the root URL
        if self.path == '/':
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            with open('register.html', 'r') as file:
                self.wfile.write(file.read().encode())
        else:
            self.send_response(404)
            self.end_headers()

    def do_POST(self):
        # Handle form submission
        if self.path == '/register':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            post_data = parse_qs(post_data.decode())

            username = post_data.get('username', [''])[0]
            email = post_data.get('email', [''])[0]
            password = post_data.get('password', [''])[0]

            # Print the form data
            print(f"Received Registration - Username: {username}, Email: {email}, Password: {password}")

            # Respond with a success message
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write("<h1>Registration Successful!</h1>".encode())
        else:
            self.send_response(404)
            self.end_headers()

# Set up and run the server
Handler = MyRequestHandler
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at port {PORT}")
    print(f"Server started at http://localhost:{PORT}")

    httpd.serve_forever()
