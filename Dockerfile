# Use official nginx image as base
FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy website files to nginx html directory
COPY . /usr/share/nginx/html/

# Expose port 8080 (Koyeb's default)
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
