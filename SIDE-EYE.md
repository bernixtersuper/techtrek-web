# Generacion de fotos side-eye

Las fotos side-eye se generan con ChatGPT (GPT-4o image generation) usando la foto de perfil del miembro como referencia.

## Como usarlo

1. Abrir ChatGPT con GPT-4o
2. Subir la foto de perfil del miembro
3. Pegar el prompt de abajo, reemplazando `[LEFT_OR_RIGHT]` con la direccion correcta:
   - Si el miembro esta a la **izquierda** del vecino que recibe el hover, mirar hacia la **right**
   - Si el miembro esta a la **derecha**, mirar hacia la **left**
4. Guardar el resultado en `public/images/team/side-eye/nombre-side-eye.png`
5. Actualizar el campo `photoCompressed` en `data/content.ts`

## Prompt

```
Using the provided profile picture as the exact base reference, create a minimally altered version of the same portrait.

Preserve:
- identical person and identity
- identical hairstyle
- identical clothing
- identical framing and crop
- identical lighting and shadows
- identical background
- identical camera lens and depth of field
- identical realism and texture
- identical color grading
- identical facial proportions

Only modify:
- expression
- eye direction
- very slight head orientation

Expression:
A subtle, playful annoyed expression with a friendly side-eye, like someone reacting to their friend getting attention again. The emotion should be understated and realistic, not comedic or exaggerated.

Facial adjustments:
- very slight eyebrow asymmetry
- tiny cheek tension
- faint restrained smirk or lip compression
- relaxed face overall
- maintain attractiveness and natural realism

Head pose:
- rotate the head approximately 10 degrees toward the [LEFT_OR_RIGHT]
- eyes should glance toward the [LEFT_OR_RIGHT]
- keep the movement subtle and believable

Important:
This must still look like the exact same original photo taken at the same moment, with only a tiny emotional reaction added.

Avoid:
- exaggerated expressions
- anger
- disgust
- sarcasm
- cartoonish emotion
- dramatic smirks
- teeth showing
- squinting too hard
- changing the jawline
- changing the nose
- changing lighting
- changing composition
- AI beauty filter look
- uncanny eyes
- overacting
- visible retouching
```
