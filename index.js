$(document).ready(function() {
	// inicializa o calendário
	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		},
		locale: 'pt-br',
		defaultView: 'month',
		editable: true,
		eventStartEditable: true,
		eventDurationEditable: true,
		selectable: true,
		selectHelper: true,
		select: function(start, end) {
			// abre o formulário de agendamento quando um usuário seleciona uma data/hora no calendário
			$('#appointment-form input[name="date"]').val(moment(start).format('YYYY-MM-DD'));
			$('#appointment-form input[name="time"]').val(moment(start).format('HH:mm'));
			$('#appointment-form').show();
			$('#appointment-form input[name="name"]').focus();
		},
		events: [
			// lista de eventos predefinidos, se desejar
		]
	});

	// esconde o formulário de agendamento
	$('#appointment-form').hide();
});
