<?php
$title = "Listes";
?>

<?php ob_start(); ?>

<h1>Listes</h1>

<section id="list">
	<p><div id="add-list" class="button">Créer une liste</div></p>
	<div id="list-form" class="invisible">
		<i class="fas fa-times"></i>
	    <h2>Créer une liste</h2>
		<form method="POST" action="index.php?action=addList">
			<p><input type="text" placeholder="Nom" name="name" maxlength="255" required />
			<textarea placeholder="Description (optionnel)" name="description"></textarea></p>
			<p><input type="submit" value="Créer" /></p>
		</form>
	</div>

		<?php foreach ($lists as $list) { ?>
			<div class="list" list="<?= $list->id() ?>">
				<h2 class="list-name"><?= $list->name() ?></h2>
				<p><span class="edit">Modifier</span> - <span class="delete">Supprimer</span></p>
				<p class="list-description"><?= nl2br($list->description()) ?></p>
				<?php if(count($tasks)) { ?>
					<table>
						<?php foreach ($tasks as $task) { ?>
							<?php if ($task->listId() === $list->id()) { ?>
							<tr class="task">
								<td>
									<input type="checkbox" id="<?= $task->id() ?>" name="<?= $task->id() ?>" <?php if ($task->done() == 1) {?> checked <?php } ?> />
									<label for="<?= $task->id() ?>" important="<?= $task->important() ?>"><?= $task->name() ?></label>
								</td>
								<td>
									<p class="date" <?php if($task->reccuring() == 1) { echo 'schedule="' . $task->schedule() . '"'; } ?>><?= $task->deadlineDate() ?></p>
								</td>
								<td>
									<i class="fas fa-edit" title="Modifier"></i>
									<?php if($task->reccuring() == 1) { ?>
										<i class="fas fa-trash" title="Supprimer"></i>
									<?php } else { ?>
										<a href="index.php?action=deleteTask&id=<?= $task->id() ?>"><i class="fas fa-trash" title="Supprimer"></i></a>
									<?php } ?>
								</td>
							</tr>
							<?php } ?>
						<?php } ?>
					</table>
					<div id="addtask-list"><i class="fas fa-plus fa-fw"></i> Ajouter une tâche</div>
				<?php } else { ?><p>Pas de tâche.</p><?php } ?>
			</div>
		<?php } ?>

<?php if(count($lists)) { ?>

<?php } else { ?><p>Pas de liste.</p><?php } ?>

</section>

<?php $content = ob_get_clean(); ?>

<?php require('backendTemplate.php'); ?>