from flask import Flask, render_template, request, redirect, url_for, flash
import mysql.connector
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.config['SECRET_KEY'] = 'a1b2d3e4f5'

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="pass123",
    database="crud_db"
)
cursor = db.cursor()

# Rutas
@app.route('/')
def index():
    cursor.execute("SELECT * FROM users")
    users = cursor.fetchall()
    return render_template('index.html', users=users)

@app.route('/create', methods=['GET', 'POST'])
def create():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']
        hashed_password = generate_password_hash(password, method='pbkdf2:sha256')
        cursor.execute("INSERT INTO users (username, email, password) VALUES (%s, %s, %s)",
                       (username, email, hashed_password))
        db.commit()
        flash('Usuario creado exitosamente.', 'success')
        return redirect(url_for('index'))
    return render_template('create.html')

@app.route('/read/<int:user_id>')
def read(user_id):
    cursor.execute("SELECT * FROM users WHERE id = %s", (user_id,))
    user = cursor.fetchone()
    return render_template('read.html', user=user)

@app.route('/update/<int:user_id>', methods=['GET', 'POST'])
def update(user_id):
    if request.method == 'POST':
        new_username = request.form['username']
        new_email = request.form['email']
        new_password = request.form['password']
        if new_password:
            hashed_password = generate_password_hash(new_password, method='pbkdf2:sha256')
            cursor.execute("UPDATE users SET username=%s, email=%s, password=%s WHERE id=%s",
                           (new_username, new_email, hashed_password, user_id))
        else:
            cursor.execute("UPDATE users SET username=%s, email=%s WHERE id=%s",
                           (new_username, new_email, user_id))
        db.commit()
        flash('Usuario actualizado exitosamente.', 'success')
        return redirect(url_for('index'))
    cursor.execute("SELECT * FROM users WHERE id = %s", (user_id,))
    user = cursor.fetchone()
    return render_template('update.html', user=user)

@app.route('/delete/<int:user_id>')
def delete(user_id):
    cursor.execute("DELETE FROM users WHERE id = %s", (user_id,))
    db.commit()
    flash('Usuario eliminado exitosamente.', 'success')
    return redirect(url_for('index'))

@app.route('/change_password/<int:user_id>', methods=['GET', 'POST'])
def change_password(user_id):
    if request.method == 'POST':
        current_password = request.form['current_password']
        new_password = request.form['new_password']
        confirm_password = request.form['confirm_password']

        cursor.execute("SELECT password FROM users WHERE id = %s", (user_id,))
        current_hashed_password = cursor.fetchone()[0]

        if check_password_hash(current_hashed_password, current_password):
            if new_password == confirm_password:
                hashed_password = generate_password_hash(new_password, method='pbkdf2:sha256')
                cursor.execute("UPDATE users SET password=%s WHERE id=%s", (hashed_password, user_id))
                db.commit()
                flash('Contraseña cambiada exitosamente.', 'success')
                return redirect(url_for('index'))
            else:
                flash('Las contraseñas no coinciden.', 'error')
        else:
            flash('Contraseña actual incorrecta.', 'error')

    return render_template('change_password.html')

if __name__ == '__main__':
    app.run(debug=True)