const emojiList = [
    { name: 'grinning', class: 'smiles', emoji: 'π' },
    { name: 'smiley', class: 'smiles', emoji: 'π' },
    { name: 'smile', class: 'smiles', emoji: 'π' },
    { name: 'grin', class: 'smiles', emoji: 'π' },
    { name: 'laughing', class: 'smiles', emoji: 'π' },
    { name: 'face_holding_back_tears', class: 'smiles', emoji: 'π₯Ή' },
    { name: 'sweat_smile', class: 'smiles', emoji: 'π' },
    { name: 'joy', class: 'smiles', emoji: 'π' },
    { name: 'rofl', class: 'smiles', emoji: 'π€£' },
    { name: 'smiling_face_with_tear', class: 'smiles', emoji: 'π₯²' },
    { name: 'relaxed', class: 'smiles', emoji: 'βΊοΈ' },
    { name: 'blush', class: 'smiles', emoji: 'π' },
    { name: 'innocent', class: 'smiles', emoji: 'π' },
    { name: 'slight_smile', class: 'smiles', emoji: 'π' },
    { name: 'upside_down_face', class: 'smiles', emoji: 'π' },
    { name: 'wink', class: 'smiles', emoji: 'π' },
    { name: 'relieved', class: 'smiles', emoji: 'π' },
    { name: 'heart_eyes', class: 'smiles', emoji: 'π' },
    { name: 'smiling_face_with_3_hearts', class: 'smiles', emoji: 'π₯°' },
    { name: 'kissing_heart', class: 'smiles', emoji: 'π' },
    { name: 'kissing', class: 'smiles', emoji: 'π' },
    { name: 'kissing_smiling_eyes', class: 'smiles', emoji: 'π' },
    { name: 'kissing_closed_eyes', class: 'smiles', emoji: 'π' },
    { name: 'yum', class: 'smiles', emoji: 'π' },
    { name: 'stuck_out_tongue', class: 'smiles', emoji: 'π' },
    { name: 'stuck_out_tongue_closed_eyes', class: 'smiles', emoji: 'π' },
    { name: 'stuck_out_tongue_winking_eye', class: 'smiles', emoji: 'π' },
    { name: 'zany_face', class: 'smiles', emoji: 'π€ͺ' },
    { name: 'face_with_raised_eyebrow', class: 'smiles', emoji: 'π€¨' },
    { name: 'face_with_monocle', class: 'smiles', emoji: 'π§' },
    { name: 'nerd', class: 'smiles', emoji: 'π€' },
    { name: 'sunglasses', class: 'smiles', emoji: 'π' },
    { name: 'disguised_face', class: 'smiles', emoji: 'π₯Έ' },
    { name: 'star_struck', class: 'smiles', emoji: 'π€©' },
    { name: 'partying_face', class: 'smiles', emoji: 'π₯³' },
    { name: 'smirk', class: 'smiles', emoji: 'π' },
    { name: 'unamused', class: 'smiles', emoji: 'π' },
    { name: 'disappointed', class: 'smiles', emoji: 'π' },
    { name: 'pensive', class: 'smiles', emoji: 'π' },
    { name: 'worried', class: 'smiles', emoji: 'π' },
    { name: 'confused', class: 'smiles', emoji: 'π' },
    { name: 'slight_frown', class: 'smiles', emoji: 'π' },
    { name: 'frowning2', class: 'smiles', emoji: 'βΉοΈ' },
    { name: 'persevere', class: 'smiles', emoji: 'π£' },
    { name: 'confounded', class: 'smiles', emoji: 'π' },
    { name: 'tired_face', class: 'smiles', emoji: 'π«' },
    { name: 'weary', class: 'smiles', emoji: 'π©' },
    { name: 'pleading_face', class: 'smiles', emoji: 'π₯Ί' },
    { name: 'cry', class: 'smiles', emoji: 'π’' },
    { name: 'sob', class: 'smiles', emoji: 'π­' },
    { name: 'triumph', class: 'smiles', emoji: 'π€' },
    { name: 'angry', class: 'smiles', emoji: 'π ' },
    { name: 'rage', class: 'smiles', emoji: 'π‘' },
    { name: 'face_with_symbols_over_mouth', class: 'smiles', emoji: 'π€¬' },/*
    { name: 'exploding_head', class: 'smiles', emoji: 'π€―' },
    { name: 'flushed', class: 'smiles', emoji: 'π³' },
    { name: 'hot_face', class: 'smiles', emoji: 'π₯΅' },
    { name: 'cold_face', class: 'smiles', emoji: 'π₯Ά' },
    { name: 'face_in_clouds', class: 'smiles', emoji: 'πΆβπ«οΈ' },
    { name: 'scream', class: 'smiles', emoji: 'π±' },
    { name: 'fearful', class: 'smiles', emoji: 'π¨' },
    { name: 'cold_sweat', class: 'smiles', emoji: 'π°' },
    { name: 'disappointed_relieved', class: 'smiles', emoji: 'π₯' },
    { name: 'sweat', class: 'smiles', emoji: 'π' },
    { name: 'hugging', class: 'smiles', emoji: 'π€' },
    { name: 'thinking', class: 'smiles', emoji: 'π€' },
    { name: 'face_with_peeking_eye', class: 'smiles', emoji: 'π«£' },
    { name: 'face_with_hand_over_mouth', class: 'smiles', emoji: 'π€­' },
    { name: 'saluting_face', class: 'smiles', emoji: 'π«‘' },
    { name: 'face_with_open_eyes_and_hand_over_mouth', class: 'smiles', emoji: 'π«’' },
    { name: 'shushing_face', class: 'smiles', emoji: 'π€«' },
    { name: 'melting_face', class: 'smiles', emoji: 'π« ' },
    { name: 'lying_face', class: 'smiles', emoji: 'π€₯' },
    { name: 'no_mouth', class: 'smiles', emoji: 'πΆ' },
    { name: 'dotted_line_face', class: 'smiles', emoji: 'π«₯' },
    { name: 'neutral_face', class: 'smiles', emoji: 'π' },
    { name: 'face_with_diagonal_mouth', class: 'smiles', emoji: 'π«‘' },
    { name: 'expressionless', class: 'smiles', emoji: 'π' },*/
]

/*
function replaceEmojis(text) {
    for(let i = 0; i < emojiList.length; i++) {
        if(text.includes(`:${emojiList[i].name}:`)) {
            text = text.replace(`:${emojiList[i].name}:`, `<img src="../img/emojis/${emojiList[i].class}/${emojiList[i].name}.svg" class="post-content-emoji">`)
            return text
        } else if(text.includes(emojiList[i].emoji)) {
            text = text.replace(emojiList[i].emoji, `<img src="../img/emojis/${emojiList[i].class}/${emojiList[i].name}.svg" class="post-content-emoji">`)
            return text
        } else {
            return text
        }
    }
}

console.log(replaceEmojis('hey there :grinning:'))
*/

for(let i = 0; i < emojiList.length; i++) {
    console.log(`<img src="../img/emojis/${emojiList[i].class}/${emojiList[i].name}.svg" class="create-post-emojis-content-container-options-content-emoji" onclick="addEmoji('${emojiList[i].emoji}')">`)
}

