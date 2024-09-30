from flask import Flask, render_template, request, redirect, url_for, flash
from weather_service import WeatherService

def create_app():
    app = Flask(__name__)
    app.secret_key = 'supersecretkey'  # Needed for flashing messages

    @app.route('/')
    def index():
        return render_template('index.html')

    @app.route('/get_weather', methods=['POST'])
    def get_weather():
        city = request.form.get('city')
        if not city:
            flash('City name cannot be empty!')
            return redirect(url_for('index'))

        weather_service = WeatherService()
        weather_data = weather_service.get_current_weather(city)

        if weather_data is None:
            flash('Could not fetch weather data. Please try again.')
            return redirect(url_for('index'))

        return render_template('index.html', weather=weather_data)

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)